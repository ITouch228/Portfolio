import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.25,
  });

  return (
    <div className='sticky top-0 z-[60]'>
      <motion.div
        style={{ scaleX }}
        className='h-[2px] w-full origin-left bg-white/60'
      />
    </div>
  );
}
