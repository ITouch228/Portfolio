import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

const exp = [
  {
    title: 'Frontend-разработка',
    meta: 'React • TypeScript • Архитектура интерфейсов',
    points: [
      'Проектирование компонентной архитектуры и структуры SPA-приложений',
      'Инкапсуляция бизнес-логики через кастомные хуки',
      'Строгая типизация API-ответов и управление состоянием',
      'Внимание к UX, доступности и читаемости интерфейсов',
      'Анимации и интерактивность без усложнения кода',
    ],
  },
  {
    title: 'Backend-разработка',
    meta: 'FastAPI • PostgreSQL • JWT • Docker',
    points: [
      'Проектирование REST API и работа с WebSocket',
      'Разделение backend на слои (routes / services / dao / schemas)',
      'Работа с PostgreSQL и миграциями через Alembic',
      'JWT-аутентификация и контроль доступа',
      'Контейнеризация и деплой через Docker',
    ],
  },
];

export function Experience() {
  return (
    <Section
      id='experience'
      title='Подход к разработке'
      subtitle='Как я проектирую и реализую fullstack-приложения.'
    >
      <Reveal>
        <div className='grid gap-5 md:grid-cols-2'>
          {exp.map(e => (
            <Card key={e.title}>
              <div className='flex items-start justify-between gap-3'>
                <div>
                  <h3 className='text-lg font-semibold'>{e.title}</h3>
                  <p className='mt-1 text-xs text-white/50'>{e.meta}</p>
                </div>
              </div>

              <ul className='mt-5 space-y-2 text-sm text-white/70 list-disc pl-5'>
                {e.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
