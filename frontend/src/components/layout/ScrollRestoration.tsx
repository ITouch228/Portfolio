import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollRestoration() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // блокируем reveal на время восстановления
    document.documentElement.setAttribute('data-scroll-restoring', 'true');

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    // снимаем блокировку
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.removeAttribute('data-scroll-restoring');
      });
    });
  }, [pathname]);

  return null;
}
