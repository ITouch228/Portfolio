import { motion } from 'framer-motion';
import { useProjectStatus } from '../../hooks/useProjectStatus';

export function ProjectStatusBadge({ url }: { url?: string }) {
  const status = useProjectStatus(url);

  const config = {
    online: {
      text: 'Доступно онлайн',
      dot: 'bg-emerald-400',
      container:
        'bg-emerald-500/15 border border-emerald-400/30 text-emerald-300',
    },
    offline: {
      text: 'Временно недоступно',
      dot: 'bg-red-400',
      container: 'bg-red-500/15 border border-red-400/30 text-red-300',
    },
    checking: {
      text: 'Проверка...',
      dot: 'bg-white/50',
      container: 'bg-white/10 border border-white/20 text-white/60',
    },
  };

  const current = config[status];

  return (
    <span
      className={`
        inline-flex items-center gap-2
        rounded-full mt-4 px-3 py-1 text-xs
        ${current.container}
      `}
    >
      <motion.span
        className={`h-2 w-2 rounded-full ${current.dot}`}
        animate={
          status === 'online'
            ? { scale: [1, 1.4, 1] }
            : status === 'offline'
              ? { opacity: [1, 0.4, 1] }
              : { opacity: [1, 0.5, 1] }
        }
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {current.text}
    </span>
  );
}
