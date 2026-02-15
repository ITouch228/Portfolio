import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section className='relative overflow-hidden pt-28 md:pt-36'>
      <div className='mx-auto max-w-6xl px-5 pb-10'>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className='text-sm text-white/70'
        >
          Fullstack-разработчик
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className='mt-4 text-4xl md:text-6xl font-semibold leading-tight'
        >
          <span className='gradient-text'>
            Проектирую и реализую fullstack-приложения
          </span>
          <br />с чистой архитектурой и продуманным UX.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className='mt-6 max-w-2xl text-base md:text-lg text-white/70'
        >
          Работаю с React и TypeScript на клиенте и FastAPI с PostgreSQL на
          сервере. Проектирую архитектуру, настраиваю авторизацию, работаю с
          REST API, WebSocket и Docker. Строю приложения целиком — от базы
          данных до интерфейса. Основной фокус — структурированная архитектура и
          чистый код.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className='mt-10 flex flex-wrap gap-3'
        >
          <Magnetic strength={12}>
            <a
              href='#projects'
              className='rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2'
            >
              Смотреть проекты <ArrowUpRight size={16} />
            </a>
          </Magnetic>

          <a
            href='#contact'
            className='rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/5 transition'
          >
            Связаться
          </a>
        </motion.div>
      </div>
    </section>
  );
}
