// Compatibility adapter for DSH's native status marker. There is currently no
// narrow running-status slot: never replace conversation.chat.flow just to skin
// its tail. Native React children and their live region stay owned by DSH.

export function powerClock(ms) {
  if (!Number.isFinite(ms)) return { main: "--:--", cs: "--" };
  const total = Math.max(0, Math.floor(ms / 10));
  const pad = (n) => String(n).padStart(2, "0");
  return { main: `${pad(Math.floor(total / 6000))}:${pad(Math.floor(total / 100) % 60)}`, cs: pad(total % 100) };
}

/** Same open-turn timestamp source as native ChatFlow; not time since mount. */
export function turnStartTime(snapshot) {
  const key = snapshot?.navigation.items().at(-1)?.anchorKey;
  const location = snapshot?.nodes.get(key)?.location;
  if ((location?.kind === "turn" || location?.kind === "step") && location.turn.status === "open") {
    const time = location.turn.start?.time;
    return Number.isFinite(time) ? time : undefined;
  }
  return undefined;
}

/** Decorate only one Conversation occurrence; disposer restores native display. */
export function attachRunningStatus(root, { startTime, title = "", now = Date.now } = {}) {
  const document = root.ownerDocument;
  const view = document.defaultView;
  const plates = new Map();
  let state = { startTime, title };
  let timer;
  let disposed = false;

  const paint = () => {
    const c = powerClock(state.startTime === undefined ? undefined : now() - state.startTime);
    for (const { plate, main, cs } of plates.values()) {
      if (main.textContent !== c.main) main.textContent = c.main;
      if (cs.textContent !== `:${c.cs}`) cs.textContent = `:${c.cs}`;
      if (plate.title !== state.title) plate.title = state.title;
    }
  };
  const release = (node) => {
    plates.get(node)?.plate.remove();
    node.removeAttribute("data-eva-running");
    plates.delete(node);
  };
  const scan = () => {
    if (disposed) return;
    const visible = new Set([...root.querySelectorAll("[data-chat-running]")].filter((node) =>
      !node.hasAttribute("data-holding") && !node.hidden && node.getAttribute("aria-hidden") !== "true"));
    for (const node of plates.keys()) if (!visible.has(node)) release(node);
    for (const node of visible) {
      if (plates.get(node)?.plate.parentElement === node) continue;
      if (plates.has(node)) release(node);
      const plate = document.createElement("span");
      plate.className = "eva-running-power";
      plate.setAttribute("data-eva-running-status", "");
      plate.setAttribute("aria-hidden", "true"); // native static status owns announcements
      const label = document.createElement("b");
      label.textContent = "内部電源";
      const clock = document.createElement("span");
      clock.className = "eva-power-clock";
      const main = document.createElement("span");
      const cs = document.createElement("small");
      clock.append(main, cs);
      const line = document.createElement("i");
      line.className = "eva-power-line";
      plate.append(label, clock, line);
      node.append(plate);
      node.setAttribute("data-eva-running", "");
      plates.set(node, { plate, main, cs });
    }
    paint();
    if (plates.size && timer === undefined) timer = view.setInterval(paint, 50);
    else if (!plates.size && timer !== undefined) {
      view.clearInterval(timer);
      timer = undefined;
    }
  };
  const observer = new view.MutationObserver((records) => {
    // Ignore both our 20 Hz ticks and unrelated streamed answer text. Only
    // status-marker lifecycle/visibility changes can require another scan.
    const touchesStatus = (node) => node.nodeType === 1 &&
      (node.matches("[data-chat-running]") || node.querySelector("[data-chat-running]"));
    if (records.some((record) => {
      if (record.type === "attributes") return record.target.matches("[data-chat-running]") || plates.has(record.target);
      if (plates.has(record.target)) return true; // native child rebuild / removed plate
      return [...record.addedNodes, ...record.removedNodes].some(touchesStatus);
    })) scan();
  });
  observer.observe(root, { subtree: true, childList: true, attributes: true,
    attributeFilter: ["data-chat-running", "data-holding", "aria-hidden", "hidden"] });
  scan();
  return {
    update(next) { state = { ...state, ...next }; paint(); },
    dispose() {
      disposed = true;
      observer.disconnect();
      if (timer !== undefined) view.clearInterval(timer);
      for (const node of plates.keys()) release(node);
    },
  };
}
