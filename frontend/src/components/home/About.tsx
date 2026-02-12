import { Reveal } from '../ui/Reveal';

export function About() {
  return (
    <section className='mx-auto max-w-6xl px-5 py-20'>
      <Reveal>
        <h2 className='text-2xl md:text-3xl font-semibold'>Обо мне</h2>
        <div className='mt-6 max-w-3xl text-white/70 space-y-4'>
          <p>
            Фронтенд-разработчик (React + TypeScript). Работаю над
            SPA-приложениями с акцентом на архитектуру, качество кода и
            пользовательский опыт.
          </p>
          <p>
            Использую компонентный подход, выношу бизнес-логику в кастомные
            хуки, работаю с REST и WebSocket API. Есть опыт полного цикла: от
            интерфейса до деплоя на сервер.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
