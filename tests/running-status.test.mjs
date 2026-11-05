import test from "node:test";
import assert from "node:assert/strict";
import { Window } from "happy-dom";

// Resolve inside the test so a missing feature reports an assertion, not a loader error.
const implementation = await import("../src/client/running-status.js").catch(() => ({}));
const { attachRunningStatus, turnStartTime, powerClock } = implementation;

test("running-status adapter exports the required lifecycle", () => {
  assert.equal(typeof attachRunningStatus, "function", "missing attachRunningStatus implementation");
});

test("clock is elapsed time, never a fictional countdown or negative duration", () => {
  assert.deepEqual(powerClock(65_430), { main: "01:05", cs: "43" });
  assert.deepEqual(powerClock(-1), { main: "00:00", cs: "00" });
  assert.deepEqual(powerClock(undefined), { main: "--:--", cs: "--" });
});

test("turn timestamp comes from the latest open turn, including a step anchor", () => {
  const snapshot = (location) => ({
    navigation: { items: () => [{ anchorKey: "latest" }] },
    nodes: new Map([["latest", { location }]]),
  });
  assert.equal(turnStartTime(snapshot({ kind: "step", turn: { status: "open", start: { time: 1234 } } })), 1234);
  assert.equal(turnStartTime(snapshot({ kind: "turn", turn: { status: "closed", start: { time: 1234 } } })), undefined);
  assert.equal(turnStartTime(snapshot({ kind: "turn", turn: { status: "open" } })), undefined);
  assert.equal(turnStartTime(undefined), undefined);
});

function fixture() {
  const window = new Window();
  const { document } = window;
  document.body.innerHTML = `<section id="active" data-conversation-content>
    <div data-chat-running><span role="status" aria-live="polite">深度求索中</span>
    <span aria-hidden="true"></span><span class="native-content">深度求索中，用时 1分钟 ···</span></div>
    </section><section id="other" data-conversation-content><div data-chat-running>Other session</div></section>`;
  return { window, document, root: document.querySelector("#active"), status: document.querySelector("#active [data-chat-running]") };
}

test("replaces only the owning conversation and preserves native nodes and live region", () => {
  const { window, document, root, status } = fixture();
  const original = [...status.childNodes];
  const adapter = attachRunningStatus(root, { startTime: 1000, now: () => 66_430, title: "Internal power" });
  const plate = status.querySelector("[data-eva-running-status]");
  assert.ok(plate);
  assert.match(plate.textContent, /内部電源/);
  assert.match(plate.textContent, /01:05:43/);
  assert.equal(plate.getAttribute("aria-hidden"), "true", "do not announce 20 timer ticks per second");
  assert.equal(status.querySelector('[role="status"]').textContent, "深度求索中");
  assert.equal(document.querySelector("#other [data-eva-running-status]"), null);
  adapter.update({ startTime: 66_000, title: "New turn" });
  assert.match(plate.textContent, /00:00:43/, "continuous runs use the new turn timestamp");
  adapter.dispose();
  assert.equal(status.hasAttribute("data-eva-running"), false);
  assert.deepEqual([...status.childNodes], original, "disable/unload restores exactly the original DOM");
  window.happyDOM.abort();
});

test("observes late native mounts, holding state and node removal without duplicates", async () => {
  const { window, document, root, status } = fixture();
  status.remove();
  const adapter = attachRunningStatus(root, { startTime: 1000, now: () => 2000 });
  root.append(status);
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(status.querySelectorAll("[data-eva-running-status]").length, 1);
  status.setAttribute("data-holding", "");
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(status.hasAttribute("data-eva-running"), false, "never unhide a held native status");
  status.removeAttribute("data-holding");
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(status.querySelectorAll("[data-eva-running-status]").length, 1);
  status.remove();
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(status.querySelector("[data-eva-running-status]"), null);
  adapter.dispose();
  window.happyDOM.abort();
});

test("unrelated streaming mutations do not rescan the transcript and removed plates recover", async () => {
  const { window, document, root, status } = fixture();
  const stream = document.createElement("p");
  root.prepend(stream);
  let scans = 0;
  const query = root.querySelectorAll.bind(root);
  root.querySelectorAll = (...args) => { scans++; return query(...args); };
  const adapter = attachRunningStatus(root, { startTime: 1000, now: () => 2000 });
  try {
    await new Promise((resolve) => setTimeout(resolve, 5));
    const before = scans;
    stream.textContent = "a token";
    await new Promise((resolve) => setTimeout(resolve, 5));
    assert.equal(scans, before, "streaming answer text is unrelated to status lifecycle");
    status.querySelector("[data-eva-running-status]").remove();
    await new Promise((resolve) => setTimeout(resolve, 5));
    assert.equal(status.querySelectorAll("[data-eva-running-status]").length, 1, "recover if the host rebuilds native children");
  } finally {
    adapter.dispose();
    window.happyDOM.abort();
  }
});

test("unknown timestamps show placeholders and hidden native states stay untouched", () => {
  const { window, root, status } = fixture();
  const adapter = attachRunningStatus(root, { now: () => 123456 });
  assert.match(status.querySelector("[data-eva-running-status]").textContent, /--:--:--/);
  adapter.dispose();
  status.setAttribute("aria-hidden", "true");
  const hidden = attachRunningStatus(root, { startTime: 1 });
  assert.equal(status.querySelector("[data-eva-running-status]"), null);
  hidden.dispose();
  window.happyDOM.abort();
});
