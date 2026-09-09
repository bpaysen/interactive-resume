import { useEffect, useState } from "react";

const START_DELAY = 900;
const STEP = 24;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function HeroRole({ text }) {
  const [count, setCount] = useState(() =>
    prefersReducedMotion() ? text.length : 0
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    let typer;

    const opening = setTimeout(() => {
      const started = performance.now();

      // Driven by elapsed time rather than a tick count, so a throttled
      // background tab catches up instead of drifting out of step with
      // the CSS reveal running alongside it.
      typer = setInterval(() => {
        const shown = Math.min(
          text.length,
          Math.floor((performance.now() - started) / STEP)
        );

        setCount(shown);

        if (shown >= text.length) {
          clearInterval(typer);
        }
      }, STEP);
    }, START_DELAY);

    return () => {
      clearTimeout(opening);
      clearInterval(typer);
    };
  }, [text]);

  if (count >= text.length) {
    return <p className="hero-role">{text}</p>;
  }

  return (
    <p className="hero-role hero-role--typing">
      <span className="hero-role__sizer" aria-hidden="true">
        {text}
      </span>

      <span className="hero-role__typed" aria-hidden="true">
        {text.slice(0, count)}
        {count > 0 && <span className="hero-role__caret" />}
      </span>

      <span className="sr-only">{text}</span>
    </p>
  );
}
