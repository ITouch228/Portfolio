import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageTransition } from '../components/layout/PageTransition';

import { usePageTitle } from '../hooks/usePageTitle';

import { Hero } from '../components/home/Hero';
import { ProjectsGrid } from '../components/home/ProjectsGrid';
import { StackCloud } from '../components/home/StackCloud';
import { Experience } from '../components/home/Experience';
import { Contact } from '../components/home/Contact';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { About } from '../components/home/About';

export default function Home() {
  usePageTitle('Данил Яценко — Fullstack-разработчик');

  return (
    <PageTransition>
      <div className='min-h-screen bg-transparent text-white'>
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <ProjectsGrid />
          <StackCloud />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
