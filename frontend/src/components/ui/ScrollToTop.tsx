import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > 420);
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <motion.button
      type='button'
      initial={false} // важно: без "первого" дерганого инита
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='
        fixed bottom-6 right-6 z-[999]
        rounded-2xl bg-white text-black
        p-3 shadow-lg
        hover:opacity-90
        active:scale-[0.96]
      '
      aria-label='Наверх'
    >
      <ArrowUp size={18} />
    </motion.button>
  );
}
