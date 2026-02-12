import { projects } from '../../data/projects';
import { ImagePreview } from '../ui/ImagePreview';
import { Reveal } from '../ui/Reveal';
import { TiltCard } from '../ui/TiltCard';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroProject } from './HeroProject';

export function ProjectsGrid() {
  return (
    <section id='projects' className='mx-auto max-w-6xl px-5 py-20'>
      <Reveal>
        <h2 className='text-2xl md:text-3xl font-semibold'>Пет-проекты</h2>
        <p className='mt-3 text-white/65 max-w-2xl'>
          Отдельные проекты с аккуратным UX, архитектурой и анимациями.
        </p>
      </Reveal>

      <div className='mt-10 grid gap-5 md:grid-cols-2'>
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            {p.variant === 'hero' ? (
              <HeroProject
                slug={p.slug}
                title={p.title}
                description={p.description}
                image={p.preview!.image}
                demo={p.links.demo}
                repo={p.links.repo}
                tags={p.tags}
              />
            ) : (
              <TiltCard className='relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05]'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h3 className='text-lg font-semibold'>{p.title}</h3>
                    <p className='mt-2 text-sm text-white/65'>
                      {p.description}
                    </p>
                  </div>

                  {p.preview?.image && (
                    <div className='mt-5'>
                      <ImagePreview src={p.preview.image} alt={p.preview.alt} />
                    </div>
                  )}

                  <div className='flex gap-2 opacity-80'>
                    {p.links.repo && (
                      <a
                        className='p-2 rounded-xl hover:bg-white/10'
                        href={p.links.repo}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {p.links.demo && (
                      <a
                        className='p-2 rounded-xl hover:bg-white/10'
                        href={p.links.demo}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className='mt-5 flex flex-wrap gap-2'>
                  {p.tags.map(t => (
                    <span
                      key={t}
                      className='rounded-2xl border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70'
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className='mt-6'>
                  <Link
                    to={`/project/${p.slug}`}
                    className='text-sm text-white/70 hover:text-white transition inline-flex items-center gap-2'
                  >
                    Подробнее <ArrowUpRight size={16} />
                  </Link>
                </div>

                <div className='pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition'>
                  <div className='absolute -inset-24 bg-[radial-gradient(circle_at_30%_10%,rgba(99,102,241,.18),transparent_55%)]' />
                </div>
              </TiltCard>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
