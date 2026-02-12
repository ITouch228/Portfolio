import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function Section({
  id,
  title,
  subtitle,
  right,
  children,
  className,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('mx-auto max-w-6xl px-5 py-20', className)}>
      <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
        <div>
          <h2 className='text-2xl md:text-3xl font-semibold'>{title}</h2>
          {subtitle ? (
            <p className='mt-3 max-w-2xl text-white/65'>{subtitle}</p>
          ) : null}
        </div>
        {right ? <div className='shrink-0'>{right}</div> : null}
      </div>

      {children ? <div className='mt-10'>{children}</div> : null}
    </section>
  );
}
