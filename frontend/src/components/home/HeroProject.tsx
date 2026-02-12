import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectStatusBadge } from '../ui/ProjectStatusBadge';

export function HeroProject({
  slug,
  title,
  description,
  image,
  demo,
  repo,
  tags,
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
  demo?: string;
  repo?: string;
  tags: string[];
}) {
  return (
    <section className='mx-auto max-w-6xl px-5'>
      <div className='rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8'>
        <h2 className='text-2xl md:text-3xl font-semibold'>{title}</h2>

        {demo && <ProjectStatusBadge url={demo} />}

        <p className='mt-4 max-w-2xl text-white/70'>{description}</p>

        <div className='mt-5 flex flex-wrap gap-2'>
          {tags.map(t => (
            <span
              key={t}
              className='rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70'
            >
              {t}
            </span>
          ))}
        </div>

        {/* BIG PREVIEW */}
        <div className='mt-8 overflow-hidden rounded-2xl border border-white/10'>
          <img src={image} alt={title} className='w-full object-cover' />
        </div>

        <div className='mt-6 flex flex-wrap gap-3'>
          {demo && (
            <a
              href={demo}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition'
            >
              Демо <ArrowUpRight size={16} />
            </a>
          )}
          <Link
            to={`/project/${slug}`}
            className='inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/5 transition'
          >
            Подробнее <ArrowUpRight size={16} />
          </Link>
          {repo && (
            <a
              href={repo}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/5 transition'
            >
              <Github size={16} /> Репо
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
