import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  // Render content visible during SSR / pre-hydration so above-the-fold
  // sections don't appear delayed on slow networks. Only enable the
  // fade-in animation after mount on the client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({
  to,
  duration = 0.8,
  decimals = 0,
  suffix = "",
  prefix = "",
}: {
  to: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}) {
  const formatted =
    prefix +
    to.toLocaleString("de-DE", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix;

  const [mounted, setMounted] = useState(false);
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    prefix +
    v.toLocaleString("de-DE", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix
  );

  useEffect(() => {
    setMounted(true);
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [to, duration, mv]);

  if (!mounted) {
    return <span>{formatted}</span>;
  }

  return <motion.span>{rounded}</motion.span>;
}


export function Waveform({ playing = true, bars = 20, className }: { playing?: boolean; bars?: number; className?: string }) {
  return (
    <div className={`flex h-8 items-center gap-[3px] ${className ?? ""}`} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="block w-[3px] rounded-full bg-primary"
          style={{
            height: "100%",
            transformOrigin: "center",
            animation: playing
              ? `wave-bar ${0.6 + (i % 5) * 0.15}s ease-in-out ${i * 0.05}s infinite`
              : "none",
            transform: playing ? undefined : "scaleY(0.2)",
            opacity: 0.55 + ((i * 37) % 45) / 100,
          }}
        />
      ))}
    </div>
  );
}
