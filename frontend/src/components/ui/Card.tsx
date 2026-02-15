import { cn } from '../../lib/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
