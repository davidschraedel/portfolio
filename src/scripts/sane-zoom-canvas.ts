const NUM_FRAMES = 50;
const FOCAL_LENGTH = 500;
const MAX_Z = 3000;

interface ZoomFrame {
  x: number;
  y: number;
  z: number;
  speed: number;
}

function initSaneZoomCanvas() {
  const canvas = document.getElementById("sane-zoom-canvas");
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const spriteSrc = canvas.dataset.sprite;
  if (!spriteSrc) return;

  let cw = 0;
  let ch = 0;

  const resize = () => {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", resize);
  resize();

  const img = new Image();
  img.src = spriteSrc;

  const frames: ZoomFrame[] = [];
  for (let i = 0; i < NUM_FRAMES; i++) {
    frames.push({
      x: (Math.random() - 0.5) * 4000,
      y: (Math.random() - 0.5) * 4000,
      z: Math.random() * MAX_Z,
      speed: Math.random() * 3 + 1,
    });
  }

  const readScrollBoost = () => {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(
      "--sane-scroll-progress",
    );
    const progress = Number.parseFloat(raw);
    return Number.isFinite(progress) ? 1 + progress * 5 : 1;
  };

  const draw = () => {
    ctx.clearRect(0, 0, cw, ch);

    const speedBoost = readScrollBoost();
    frames.sort((a, b) => b.z - a.z);

    for (const frame of frames) {
      frame.z -= frame.speed * speedBoost;

      if (frame.z <= 0) {
        frame.z = MAX_Z;
        frame.x = (Math.random() - 0.5) * 4000;
        frame.y = (Math.random() - 0.5) * 4000;
      }

      const scale = FOCAL_LENGTH / (FOCAL_LENGTH + frame.z);
      const px = frame.x * scale + cw / 2;
      const py = frame.y * scale + ch / 2;
      const baseSize = 500 * scale;

      let drawWidth = baseSize;
      let drawHeight = baseSize;
      if (img.naturalWidth && img.naturalHeight) {
        const ratio = img.naturalWidth / img.naturalHeight;
        if (ratio > 1) {
          drawHeight = baseSize / ratio;
        } else {
          drawWidth = baseSize * ratio;
        }
      }

      let alpha = 1;
      if (frame.z > 2300) {
        alpha = (MAX_Z - frame.z) / 700;
      } else if (frame.z < 600) {
        alpha = Math.max(0, frame.z / 600);
      }

      if (alpha > 0 && img.complete) {
        ctx.globalAlpha = alpha;
        ctx.drawImage(
          img,
          px - drawWidth / 2,
          py - drawHeight / 2,
          drawWidth,
          drawHeight,
        );
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  };

  img.onload = () => draw();
  img.onerror = () => {
    img.onerror = null;
    img.src = "https://picsum.photos/400/400";
  };
}

initSaneZoomCanvas();
