const STAGE_SPACING = 1800;
const FOCUS_RANGE = 900;
const FULL_OPACITY_RATIO = 0.3;
const LERP = 0.08;
const OPACITY_LERP_IN = 0.07;
const OPACITY_LERP_OUT = 0.34;
const SCALE_MIN = 0.48;
const SCALE_RANGE = 0.32;
const WHEEL_SENSITIVITY = 0.00022;
const TOUCH_SENSITIVITY = 0.0009;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function initSaneScroll() {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stages = Array.from(
    document.querySelectorAll<HTMLElement>("[data-sane-stage]"),
  );

  const world = document.getElementById("sane-world");

  if (!world || stages.length === 0) return;

  if (reduced) {
    root.classList.add("sane-fallback");
    stages.forEach((stage) => stage.classList.add("is-active"));
    return;
  }

  const stageZ = stages.map((_, index) => -index * STAGE_SPACING);
  const maxTravel = Math.abs(stageZ[stageZ.length - 1] ?? 0);

  let targetProgress = 0;
  let currentProgress = 0;
  let touchStartY = 0;

  const stageCount = stages.length;

  const progressForStage = (index: number) =>
    stageCount <= 1 ? 0 : index / (stageCount - 1);

  const stageIndexFromHash = () => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return null;
    const index = stages.findIndex((stage) => stage.id === id);
    return index >= 0 ? index : null;
  };

  const jumpToStage = (index: number, updateHash = true) => {
    const clamped = clamp(index, 0, stageCount - 1);
    targetProgress = progressForStage(clamped);
    if (updateHash) {
      if (clamped === 0) {
        history.replaceState(null, "", window.location.pathname);
      } else {
        const id = stages[clamped]?.id;
        if (id) history.replaceState(null, "", `#${id}`);
      }
    }
  };

  const stageOpacities = stages.map(() => 0);

  const targetOpacityForDistance = (distance: number) => {
    const fullZone = FOCUS_RANGE * FULL_OPACITY_RATIO;
    if (distance <= fullZone) return 1;
    const fade = (distance - fullZone) / (FOCUS_RANGE - fullZone);
    return clamp(1 - fade, 0, 1);
  };

  const navLinks = Array.from(
    document.querySelectorAll<HTMLElement>("[data-sane-jump]"),
  );

  const applyFrame = () => {
    currentProgress += (targetProgress - currentProgress) * LERP;
    const cameraZ = currentProgress * maxTravel;

    let activeIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    stages.forEach((stage, index) => {
      const z = stageZ[index] ?? 0;
      const effectiveZ = z + cameraZ;
      const distance = Math.abs(effectiveZ);
      const focus = clamp(1 - distance / FOCUS_RANGE, 0, 1);
      const scale = SCALE_MIN + focus * SCALE_RANGE;
      const panel = stage.querySelector<HTMLElement>(".sane-stage-panel");

      const targetOpacity = targetOpacityForDistance(distance);
      const currentOpacity = stageOpacities[index] ?? 0;
      const opacityLerp =
        targetOpacity > currentOpacity ? OPACITY_LERP_IN : OPACITY_LERP_OUT;
      const fade =
        currentOpacity + (targetOpacity - currentOpacity) * opacityLerp;
      stageOpacities[index] = fade;

      if (distance < closestDistance) {
        closestDistance = distance;
        activeIndex = index;
      }

      stage.style.transform = "";

      if (panel) {
        panel.style.transform = `translate3d(0, 0, ${effectiveZ}px) scale(${scale})`;
        panel.style.opacity = "1";
        panel.style.setProperty("--panel-fade", String(fade));
      }

      stage.classList.toggle("is-active", focus > 0.35);
    });

    navLinks.forEach((link) => {
      const index = Number(link.dataset.saneJump);
      if (Number.isNaN(index)) return;
      if (index === activeIndex) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    root.style.setProperty("--sane-scroll-progress", String(currentProgress));

    requestAnimationFrame(applyFrame);
  };

  const nudgeProgress = (delta: number) => {
    targetProgress = clamp(targetProgress + delta, 0, 1);
  };

  window.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      nudgeProgress(event.deltaY * WHEEL_SENSITIVITY);
    },
    { passive: false },
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    },
    { passive: true },
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      const y = event.touches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - y;
      touchStartY = y;
      if (Math.abs(delta) > 0) {
        event.preventDefault();
        nudgeProgress(delta * TOUCH_SENSITIVITY);
      }
    },
    { passive: false },
  );

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault();
      nudgeProgress(0.06);
    }
    if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      nudgeProgress(-0.06);
    }
    if (event.key === "Home") {
      event.preventDefault();
      targetProgress = 0;
    }
    if (event.key === "End") {
      event.preventDefault();
      targetProgress = 1;
    }
  });

  navLinks.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      const index = Number(el.dataset.saneJump);
      if (Number.isNaN(index)) return;
      jumpToStage(index);
    });
  });

  const brandLink = document.querySelector<HTMLAnchorElement>(".sane-brand");
  brandLink?.addEventListener("click", (event) => {
    const onCreative = /\/creative\/?$/.test(window.location.pathname);
    if (!onCreative) return;
    event.preventDefault();
    jumpToStage(0);
  });

  window.addEventListener("hashchange", () => {
    const index = stageIndexFromHash();
    if (index !== null) jumpToStage(index, false);
  });

  const initialIndex = stageIndexFromHash();
  if (initialIndex !== null) {
    targetProgress = progressForStage(initialIndex);
    currentProgress = targetProgress;
  }

  applyFrame();
}

initSaneScroll();
