import { useMemo, useState } from 'react';
import { stack, type StackGroup } from '../../data/stack';
import { Section } from '../layout/Section';
import { Chip } from '../ui/Chip';
import { Reveal } from '../ui/Reveal';

export function StackCloud() {
  const [filter, setFilter] = useState<StackGroup | 'All'>('All');

  const items = useMemo(() => {
    if (filter === 'All') return stack;
    return stack.filter(s => s.group === filter);
  }, [filter]);

  return (
    <Section
      id='stack'
      title='Стек'
      subtitle='Использую современный стек для разработки клиент-серверных приложений. Делаю упор на типизацию, разделение ответственности и устойчивую архитектуру.'
      right={
        <div className='flex flex-wrap gap-2'>
          <Chip active={filter === 'All'} onClick={() => setFilter('All')}>
            All
          </Chip>
          <Chip
            active={filter === 'Frontend'}
            onClick={() => setFilter('Frontend')}
          >
            Фронтенд
          </Chip>
          <Chip
            active={filter === 'Backend'}
            onClick={() => setFilter('Backend')}
          >
            Бэкенд
          </Chip>
          <Chip active={filter === 'Tools'} onClick={() => setFilter('Tools')}>
            Инструменты
          </Chip>
        </div>
      }
    >
      <Reveal>
        <div className='flex flex-wrap gap-2'>
          {items.map(s => (
            <span
              key={s.label}
              title={s.group}
              className='rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75 hover:bg-white/[0.06] transition'
            >
              {s.label}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
