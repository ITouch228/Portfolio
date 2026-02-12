import { cn } from '../../lib/cn';

export function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'rounded-2xl border px-3 py-1 text-xs transition',
        active
          ? 'border-white/25 bg-white/10 text-white'
          : 'border-white/10 bg-black/20 text-white/70 hover:bg-white/5',
      )}
    >
      {children}
    </button>
  );
}
