import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';
import { Magnetic } from '../ui/Magnetic';

const items = [
  { href: '#projects', label: 'Проекты' },
  { href: '#stack', label: 'Стек' },
  { href: '#experience', label: 'Опыт' },
  { href: '#contact', label: 'Контакты' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 border-b transition',
        scrolled
          ? 'border-white/10 bg-black/55 backdrop-blur'
          : 'border-transparent bg-black/20',
      )}
    >
      <div className='mx-auto max-w-6xl px-5 h-16 flex items-center justify-between'>
        <a href='#' className='font-semibold tracking-tight'>
          <span className='text-white'>itouch</span>
          <span className='text-white/45'>.dev</span>
        </a>

        <nav className='hidden md:flex items-center gap-2 text-sm text-white/70'>
          {items.map(it => (
            <Magnetic key={it.href} strength={10}>
              <a
                className='px-3 py-2 rounded-2xl hover:bg-white/5 hover:text-white transition'
                href={it.href}
              >
                {it.label}
              </a>
            </Magnetic>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <a
            href='#contact'
            className='rounded-2xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition'
          >
            Написать
          </a>
        </div>
      </div>
    </header>
  );
}
