import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Project from './pages/Project';
import { Aurora } from './components/layout/Aurora';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { useEffect } from 'react';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Данил Яценко — Fullstack-разработчик',
      '/project/itmessage': 'ITMessage — Мессенджер',
      '/project/booking-system': 'Система бронирования помещений',
      '/project/itodo': 'IToDo — Менеджер задач',
    };
    document.title =
      titles[location.pathname] || 'Данил Яценко — Fullstack-разработчик';
  }, [location.pathname]);

  return (
    <>
      <Aurora />
      <div className='noise' />
      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/project/:slug' element={<Project />} />
        </Routes>
      </AnimatePresence>

      <ScrollToTop />
    </>
  );
}
