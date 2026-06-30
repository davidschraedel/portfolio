---
title: Soundwatch
problem: Morning routines with multiple timed activities meant constantly starting timers instead of staying present.
keyDecision: Built an interval timer that tracks elapsed time (not countdown) with optional audio cues—so focus stays on the activity, not the clock.
outcome: Deployed on Netlify and used daily for timed reading and exercise blocks.
productionThinking:
  tests: Manual smoke tests on interval start/stop, audio cue timing, and session persistence across page refresh. No automated suite yet—the core timer loop is small enough to verify by hand before each deploy.
  errorHandling: Audio playback fails gracefully when the browser blocks autoplay; the timer keeps running and shows a visible cue-failed state instead of throwing. Invalid interval input is blocked at the form level with inline validation.
  deployment: Static Vite build deployed to Netlify with automatic deploys from the main branch. Environment is zero-config—no server, no secrets, no runtime dependencies beyond the CDN.
  monitoring: Netlify deploy notifications on build failure. No runtime monitoring needed for a client-only timer app.
---

## Context

I built Soundwatch for my own morning routine: reading, exercise, and prep blocks that repeat daily but don't need a rigid countdown. Existing timer apps forced me to reset a countdown for each activity, which pulled attention back to the clock instead of the task.

The app needed to work on a phone browser without an install, load instantly, and stay usable with one hand.

## Role and constraints

Solo project—design, implementation, and deployment. Constraints: no backend budget, no account system, and the UI had to remain readable at arm's length on a phone. I optimized for a single-user, daily-use workflow rather than a general-purpose productivity tool.

## Technical decisions

**Elapsed time over countdown.** Countdown timers create urgency that didn't match how I use reading and exercise blocks. Elapsed tracking lets me glance at progress without the psychological pressure of a ticking deadline. I chose local React state with `useEffect` intervals rather than the Web Worker API—the timer accuracy requirement is human-scale (seconds), not scientific.

**Optional audio cues instead of alarms.** I chose short audio chimes over browser notifications because notifications require permission prompts and feel intrusive on a shared morning routine. Audio cues are opt-in and fail silently when autoplay is blocked.

**Vite + React + TypeScript over a native app.** A native app would add store friction for a personal tool. Vite's dev speed and Netlify's static hosting meant I could ship and iterate in an afternoon. TypeScript caught prop mismatches early in the interval configuration UI.

**Tailwind for styling.** Utility classes kept the component tree small. The visual design intentionally stays minimal—this is a tool, not a portfolio piece itself.

## Outcome and learning

Soundwatch has been deployed on Netlify since launch and gets daily use. The biggest lesson: solving my own friction point produced a clearer product narrative than any tutorial clone would have. Recruiters can click the live demo and immediately see a working timer—not a README promise.

If I extended it, I'd add lightweight automated tests around the interval math and consider a service worker for offline use. For now, the scope matches the problem.
