import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export function Aurora() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const x = useTransform(mx, [0, 1], ['30%', '70%']);
  const y = useTransform(my, [0, 1], ['25%', '75%']);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <motion.div
      aria-hidden
      className='fixed inset-0 -z-20'
      style={{
        background:
          'radial-gradient(1100px circle at var(--x) var(--y), rgba(99,102,241,.25), transparent 55%), radial-gradient(900px circle at 15% 15%, rgba(16,185,129,.18), transparent 55%), radial-gradient(900px circle at 85% 85%, rgba(236,72,153,.12), transparent 60%)',
        ['--x' as string | number]: x,
        ['--y' as string | number]: y,
      }}
    />
  );
}
