import { cn } from '../../lib/cn';

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition',
        className,
      )}
    >
      {children}
    </div>
  );
}
