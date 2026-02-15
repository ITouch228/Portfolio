import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollRestoration } from './components/layout/ScrollRestoration';
import { Aurora } from './components/layout/Aurora';
import { ScrollToTop } from './components/ui/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Project = lazy(() => import('./pages/Project'));

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollRestoration />
      <Aurora />
      <AnimatePresence mode='wait' initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <Suspense fallback={null}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='/project/:slug'
            element={
              <Suspense fallback={null}>
                <Project />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>

      <ScrollToTop />
    </>
  );
}
