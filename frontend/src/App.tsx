import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Project from './pages/Project';
import { Aurora } from './components/layout/Aurora';
import { ScrollToTop } from './components/ui/ScrollToTop';

export default function App() {
  const location = useLocation();

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
