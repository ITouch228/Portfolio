export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    repo?: string;
  };
  highlights: string[];

  caseStudy?: {
    intro: string;
    goals: string[];
    features: string[];
    architecture: string[];
    stack: { label: string; items: string[] }[];
    infra: string[];
    security: string[];
    next: string[];
  };

  variant?: 'hero' | 'card';

  preview?: {
    image: string;
    alt?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'itmessage',
    title: 'ITMessage — мессенджер для командной работы',
    variant: 'hero',
    description:
      'Веб-мессенджер для командной работы с real-time чатами, авторизацией и файловым обменом.',
    tags: [
      'Frontend',
      'Backend',
      'WebSocket',
      'FastAPI',
      'PostgreSQL',
      'Docker',
    ],
    links: {
      demo: 'http://itmessage.itouch.pw',
      repo: 'https://github.com/ITouch228/itmessage',
    },
    highlights: [
      'Real-time сообщения через WebSocket',
      'JWT-аутентификация и защита API',
      'Клиент-серверная архитектура',
      'Docker + Nginx деплой на сервер',
    ],
    caseStudy: {
      intro:
        'ITMessage — полноценное клиент-серверное приложение для общения внутри команды. Проект разработан как end-to-end приложение: от API и базы данных до клиентской части и деплоя.',
      goals: [
        'Сделать real-time переписку с быстрым UX',
        'Реализовать регистрацию/логин и сессии на JWT',
        'Добавить обмен файлами в чатах',
        'Собрать инфраструктуру для стабильного деплоя',
      ],
      features: [
        'Регистрация и авторизация по email',
        'Личные чаты и обмен сообщениями',
        'Загрузка/получение файлов в чатах',
        'Real-time обновления через WebSocket',
        'Поиск пользователей',
        'Звуковые уведомления',
        'Адаптивный интерфейс',
      ],
      architecture: [
        'Клиент → HTTP API для CRUD/авторизации',
        'Клиент → WebSocket для real-time сообщений',
        'Backend на FastAPI с разнесением по слоям (routes / services / dao)',
        'PostgreSQL как основная БД',
        'Миграции схемы через Alembic',
      ],
      stack: [
        {
          label: 'Backend',
          items: [
            'FastAPI',
            'PostgreSQL',
            'SQLAlchemy',
            'Alembic',
            'PassLib',
            'JWT',
          ],
        },
        {
          label: 'Frontend',
          items: [
            'HTML/CSS/JavaScript',
            'Axios',
            'WebSocket API',
            'Responsive UI',
          ],
        },
        {
          label: 'Infra',
          items: ['Docker', 'Docker Compose', 'Nginx (reverse proxy)'],
        },
      ],
      infra: [
        'Docker Compose для поднятия сервисов',
        'Nginx как reverse proxy',
        'Деплой на сервер с доменом и работающим демо',
      ],
      security: [
        'Хеширование паролей (bcrypt через PassLib)',
        'JWT токены с ограниченным сроком действия',
        'CORS настройки',
        'Валидация данных через Pydantic',
      ],
      next: [
        'Перенести frontend на React + TypeScript (в том числе как отдельный клиент)',
        'Добавить роли/права и групповые чаты',
        'Добавить e2e тесты и мониторинг',
      ],
    },
    preview: {
      image: '/previews/itmessage.png',
      alt: 'ITMessage — realtime team messenger',
    },
  },
  {
    slug: 'booking-system',
    title: 'Система бронирования помещений',
    variant: 'hero',
    description:
      'Приложение для бронирования переговорок и пространств: фильтры, календарь, тайм-слоты, роли и тестирование.',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'CSS Modules',
      'Vitest',
    ],
    links: {
      demo: 'https://booking.itouch.pw',
      repo: 'https://github.com/ITouch228/booking-pet-project',
    },
    preview: {
      image: '/previews/booking.png',
      alt: 'Система бронирования помещений — превью интерфейса',
    },
    highlights: [
      'Аутентификация и роли (гость/пользователь/админ)',
      'Фильтрация помещений (тип, локация, вместимость, цена)',
      'Календарь и выбор временных слотов',
      'Кастомные хуки для бизнес-логики',
      'Тесты: Vitest + Testing Library + coverage',
    ],
    caseStudy: {
      intro:
        'Современное фронтенд-приложение для бронирования помещений: от просмотра и поиска до оформления брони. Backend разрабатывался другим разработчиком — моя зона ответственности: клиент, состояние, интеграции и качество UI/UX.',
      goals: [
        'Сделать удобный поиск и фильтрацию помещений',
        'Реализовать бронирование с календарём и выбором временных интервалов',
        'Собрать устойчивую структуру проекта и типизацию',
        'Покрыть ключевую логику тестами',
      ],
      features: [
        'Регистрация/вход и защищённые маршруты',
        'Роли: гость / пользователь / администратор',
        'Каталог помещений с карточками и деталями',
        'Фильтры и поиск',
        'Календарь доступности и визуализация слотов',
        'Слайдер выбора времени бронирования',
        'История бронирований и профиль',
        'Адаптивная верстка',
      ],
      architecture: [
        'Разделение на pages / components / hooks / services / types / utils',
        'API слой в services с единым клиентом и типами ответов',
        'Бизнес-логика вынесена в кастомные хуки (useAuth/useRooms/useBookings/useTimeslots/...)',
        'Маршрутизация через React Router и защищённые маршруты',
      ],
      stack: [
        {
          label: 'Фронтенд',
          items: [
            'React 19',
            'TypeScript',
            'Vite',
            'React Router',
            'CSS Modules',
          ],
        },
        {
          label: 'UI/UX',
          items: [
            'React Calendar/DatePicker',
            'React Range',
            'Toast уведомления',
            'Spinners',
          ],
        },
        {
          label: 'Качество',
          items: ['ESLint', 'Vitest', 'Testing Library', 'Coverage'],
        },
      ],
      infra: [
        'Переменные окружения через .env (VITE_API_URL)',
        'Сборка Vite (dev) и preview режим',
      ],
      security: [
        'Ролевой доступ и защищённые маршруты на клиенте',
        'Сохранение сессии пользователя между перезапусками',
      ],
      next: [
        'Оптимизация производительности на больших списках (виртуализация)',
        'E2E тесты для ключевых сценариев (логин → бронь → подтверждение)',
        'Админ-панель управления помещениями',
      ],
    },
  },
  {
    slug: 'itodo',
    variant: 'hero',
    title: 'IToDo — менеджер задач',
    description:
      'Fullstack-приложение для управления задачами с аутентификацией, ролями и REST API.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker'],
    links: {
      repo: 'https://github.com/ITouch228/IToDo',
      demo: 'https://itodo.itouch.pw',
    },
    preview: {
      image: '/previews/itodo.png',
      alt: 'IToDo — интерфейс управления задачами',
    },
    highlights: [
      'JWT-аутентификация и контроль доступа',
      'CRUD-операции с задачами',
      'Асинхронная работа с PostgreSQL (asyncpg)',
      'Миграции базы данных через Alembic',
      'Docker Compose конфигурация',
    ],
    caseStudy: {
      intro:
        'IToDo — полнофункциональное fullstack-приложение для управления задачами. Проект включает фронтенд на React и backend на FastAPI с PostgreSQL.',
      goals: [
        'Реализовать безопасную аутентификацию пользователей',
        'Построить REST API с разделением слоёв',
        'Организовать чистую архитектуру backend-части',
        'Настроить миграции базы данных и контейнеризацию',
      ],
      features: [
        'Регистрация и вход пользователей',
        'JWT токены доступа и обновления',
        'Создание, редактирование и удаление задач',
        'Фильтрация и поиск',
        'Контроль доступа на основе ролей',
        'Адаптивный интерфейс',
        'Поддержка нескольких языков',
      ],
      architecture: [
        'Разделение backend на routes / services / dao / models / schemas',
        'RESTful API дизайн',
        'Pydantic-схемы для валидации данных',
        'Асинхронные операции с БД через SQLAlchemy + asyncpg',
        'Alembic для управления миграциями',
      ],
      stack: [
        {
          label: 'Backend',
          items: [
            'FastAPI',
            'PostgreSQL',
            'SQLAlchemy',
            'AsyncPG',
            'Alembic',
            'JWT',
            'BCrypt',
          ],
        },
        {
          label: 'Frontend',
          items: ['React', 'React Router', 'Axios', 'React Datepicker'],
        },
        {
          label: 'Инфраструктура',
          items: ['Docker', 'Docker Compose', 'Переменные окружения'],
        },
      ],
      infra: [
        'Переменные окружения через .env',
        'Сборка Vite (dev) и preview режим',
      ],
      security: [
        'Хеширование паролей (bcrypt)',
        'JWT-аутентификация',
        'Валидация входных данных через Pydantic',
        'Контроль доступа на основе ролей',
        'Настройка CORS',
      ],
      next: [
        'Добавить тестирование backend-части',
        'Реализовать пагинацию задач',
        'Добавить продакшен-деплой с reverse proxy',
      ],
    },
  },
];
