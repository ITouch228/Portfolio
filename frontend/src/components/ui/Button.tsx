import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ variant = 'primary', className, ...props }: Props) {
  return (
    <button
      className={cn(
        'rounded-2xl px-5 py-3 text-sm font-medium transition active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed',
        variant === 'primary'
          ? 'bg-white text-black hover:opacity-90'
          : 'border border-white/20 text-white hover:bg-white/5',
        className,
      )}
      {...props}
    />
  );
}
