import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

const exp = [
  {
    title: 'Frontend Developer (React / TypeScript)',
    meta: 'Практический опыт • UI/UX • компонентный подход',
    points: [
      'Проектирование компонентной архитектуры и UI-библиотек',
      'Использование кастомных хуков для инкапсуляции логики',
      'Работа с анимациями и состояниями без усложнения кода',
      'Внимание к UX, доступности и читаемости интерфейсов',
    ],
  },
  {
    title: 'Опыт интеграции с backend API',
    meta: 'FastAPI / Starlette • PostgreSQL',
    points: [
      'Работа с REST и WebSocket API',
      'Понимание структуры backend-приложений и контрактов',
      'Умение эффективно взаимодействовать с backend-разработкой',
    ],
  },
];

export function Experience() {
  return (
    <Section
      id='experience'
      title='Подход к разработке'
      subtitle='Как я обычно делаю проекты: чистая структура, предсказуемые состояния, аккуратные детали.'
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
