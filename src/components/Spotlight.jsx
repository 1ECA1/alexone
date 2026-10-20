import { useEffect, useRef } from "react";
import "./Spotlight.css";

const START_ANGLE = 45;

export default function Spotlight() {
  const anchorRef = useRef(null);
  const beamRef = useRef(null);

  useEffect(() => {
    const el = beamRef.current;
    let current = START_ANGLE;
    let target = START_ANGLE;
    let raf;

    const onMove = (e) => {
      const rect = anchorRef.current.getBoundingClientRect();
      const dx = e.clientX - rect.left;
      const dy = e.clientY - rect.top;
      target = (Math.atan2(-dx, dy) * 180) / Math.PI;
    };

    const animate = () => {
      current += (target - current) * 0.08;
      el.style.transform = `rotate(${current}deg)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={anchorRef} className="spotlight-anchor">
      <img
        ref={beamRef}
        className="spotlight-beam"
        src="/spotlight.png"
        alt=""
        style={{ transform: `rotate(${START_ANGLE}deg)` }}
      />
    </div>
  );
}