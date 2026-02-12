import { motion } from 'framer-motion';

export function ImagePreview({ src, alt }: { src: string; alt?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className='
        relative overflow-hidden rounded-2xl
        border border-white/10
        bg-black/30
        aspect-[16/9]
      '
    >
      <img
        src={src}
        alt={alt}
        loading='lazy'
        className='
          h-full w-full object-cover
        '
      />

      {/* градиент для читаемости */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
    </motion.div>
  );
}
