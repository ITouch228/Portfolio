import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const controls = useAnimationControls();

  useLayoutEffect(() => {
    controls.set({ opacity: 0, y: 18 });
  }, [controls]);

  const inView = useInView(ref, {
    once: true,
    amount: 0.45,
  });

  useEffect(() => {
    if (!inView) return;

    const isRestoring = document.documentElement.hasAttribute(
      'data-scroll-restoring',
    );
    if (!isRestoring) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut', delay },
      });
      return;
    }

    let raf = 0;
    const tick = () => {
      if (!isRestoring) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: 'easeOut', delay },
        });
      } else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [inView, controls, delay]);

  return (
    <motion.div ref={ref} animate={controls}>
      {children}
    </motion.div>
  );
}
