import { Reveal } from '../ui/Reveal';

export function About() {
  return (
    <section className='mx-auto max-w-6xl px-5 py-20'>
      <Reveal>
        <h2 className='text-2xl md:text-3xl font-semibold'>Обо мне</h2>
        <div className='mt-6 max-w-3xl text-white/70 space-y-4'>
          <p>
            Fullstack-разработчик (React + FastAPI). Разрабатываю
            клиент-серверные приложения с продуманной архитектурой и вниманием к
            качеству кода.
          </p>
          <p>
            На фронтенде работаю с React и TypeScript: компонентная структура,
            кастомные хуки, типизация и управление состоянием. На бэкенде
            использую FastAPI и PostgreSQL: реализую REST API,
            JWT-аутентификацию, работу с WebSocket и миграции базы данных.
          </p>
          <p>
            Есть опыт полного цикла разработки: от проектирования структуры
            приложения и базы данных до деплоя через Docker и настройки сервера.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
