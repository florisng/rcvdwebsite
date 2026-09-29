import { useEffect, useRef } from "react";
import "./reveal.css";

function Reveal({ children, className = "", direction = "up", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rcvd-reveal rcvd-reveal-${direction} ${className}`}
      style={{ "--reveal-delay": `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default Reveal;
