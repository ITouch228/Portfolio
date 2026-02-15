import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Server,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { projects } from '../data/projects';
import { usePageTitle } from '../hooks/usePageTitle';
import { PageTransition } from '../components/layout/PageTransition';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { ProjectCard } from '../components/ui/ProjectCard';
import { Chip } from '../components/ui/Chip';
import { Reveal } from '../components/ui/Reveal';

export default function Project() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  usePageTitle(
    project
      ? `${project.title} | Данил Яценко`
      : 'Проект не найден | Данил Яценко',
  );

  if (!project) {
    return (
      <PageTransition>
        <ScrollProgress />
        <div className='min-h-screen bg-transparent text-white px-5 py-24'>
          <div className='mx-auto max-w-4xl'>
            <p className='text-white/70'>Проект не найден.</p>
            <Link
              className='mt-4 inline-flex items-center gap-2 text-white hover:underline'
              to='/'
            >
              <ArrowLeft size={16} /> На главную
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const cs = project.caseStudy;

  return (
    <PageTransition>
      <ScrollProgress />
      <div className='min-h-screen bg-transparent text-white px-5 py-24'>
        <div className='mx-auto max-w-4xl'>
          <Link
            className='inline-flex items-center gap-2 text-white/70 hover:text-white transition'
            to='/'
          >
            <ArrowLeft size={16} /> Назад
          </Link>

          {/* Шапка проекта */}
          <Reveal>
            <div className='mt-6 flex items-start justify-between gap-4'>
              <div>
                <h1 className='text-3xl md:text-4xl font-semibold'>
                  {project.title}
                </h1>
                <p className='mt-4 text-white/70'>{project.description}</p>

                <div className='mt-6 flex flex-wrap gap-2'>
                  {project.tags.map(t => (
                    <Chip key={t} active={true}>
                      {t}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className='flex gap-2 shrink-0'>
                {project.links.repo ? (
                  <a
                    className='rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06] transition inline-flex items-center gap-2'
                    href={project.links.repo}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <Github size={16} /> Репо
                  </a>
                ) : null}
                {project.links.demo ? (
                  <a
                    className='rounded-2xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2'
                    href={project.links.demo}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    Демо <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>

          {/* Ключевые особенности */}
          <div className='mt-10 grid gap-5 md:grid-cols-2'>
            <Reveal delay={0.05}>
              <ProjectCard
                title='Ключевые особенности'
                icon={<Sparkles size={16} />}
              >
                <ul className='list-disc pl-5 space-y-2'>
                  {project.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </ProjectCard>
            </Reveal>
            <Reveal delay={0.12}>
              <ProjectCard
                title='Коротко о проекте'
                icon={<Layers size={16} />}
              >
                {cs?.intro ? (
                  <p>{cs.intro}</p>
                ) : (
                  <p>Кейс будет добавлен позже.</p>
                )}
              </ProjectCard>
            </Reveal>
          </div>

          {/* Case study blocks */}
          {cs ? (
            <div className='mt-8 grid gap-5'>
              <div className='grid gap-5 md:grid-cols-2'>
                <Reveal delay={0.05}>
                  <ProjectCard title='Цели' icon={<Sparkles size={16} />}>
                    <ul className='list-disc pl-5 space-y-2'>
                      {cs.goals.map(x => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </ProjectCard>
                </Reveal>
                <Reveal delay={0.1}>
                  <ProjectCard
                    title='Функциональность'
                    icon={<Sparkles size={16} />}
                  >
                    <ul className='list-disc pl-5 space-y-2'>
                      {cs.features.map(x => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </ProjectCard>
                </Reveal>
              </div>
              <Reveal delay={0.05}>
                <ProjectCard title='Архитектура' icon={<Layers size={16} />}>
                  <ul className='list-disc pl-5 space-y-2'>
                    {cs.architecture.map(x => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </ProjectCard>
              </Reveal>
              <Reveal delay={0.05}>
                <ProjectCard title='Стек' icon={<Server size={16} />}>
                  <div className='grid gap-4 md:grid-cols-3'>
                    {cs.stack.map(g => (
                      <div
                        key={g.label}
                        className='rounded-2xl border border-white/10 bg-black/20 p-4'
                      >
                        <div className='text-sm font-semibold text-white/85'>
                          {g.label}
                        </div>
                        <div className='mt-3 flex flex-wrap gap-2'>
                          {g.items.map(it => (
                            <Chip key={it}>{it}</Chip>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ProjectCard>
              </Reveal>

              <div className='grid gap-5 md:grid-cols-2'>
                <Reveal delay={0.05}>
                  <ProjectCard
                    title='Инфраструктура'
                    icon={<Server size={16} />}
                  >
                    <ul className='list-disc pl-5 space-y-2'>
                      {cs.infra.map(x => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </ProjectCard>
                </Reveal>
                <Reveal delay={0.1}>
                  <ProjectCard title='Безопасность' icon={<Shield size={16} />}>
                    <ul className='list-disc pl-5 space-y-2'>
                      {cs.security.map(x => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </ProjectCard>
                </Reveal>
              </div>
              <Reveal delay={0.05}>
                <ProjectCard
                  title='Что бы улучшил дальше'
                  icon={<Sparkles size={16} />}
                >
                  <ul className='list-disc pl-5 space-y-2'>
                    {cs.next.map(x => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </ProjectCard>
              </Reveal>
            </div>
          ) : null}
        </div>
      </div>
    </PageTransition>
  );
}
