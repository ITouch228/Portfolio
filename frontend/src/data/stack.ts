export type StackGroup = 'Frontend' | 'Backend' | 'Tools';

export type StackItem = {
  label: string;
  group: StackGroup;
};

export const stack: StackItem[] = [
  { label: 'Vite', group: 'Frontend' },
  { label: 'React', group: 'Frontend' },
  { label: 'TypeScript', group: 'Frontend' },
  { label: 'Framer Motion', group: 'Frontend' },
  { label: 'TanStack Query', group: 'Frontend' },
  { label: 'Tailwind CSS', group: 'Frontend' },

  { label: 'FastAPI', group: 'Backend' },
  { label: 'Starlette', group: 'Backend' },
  { label: 'DAO pattern', group: 'Backend' },
  { label: 'SQLAlchemy ORM', group: 'Backend' },
  { label: 'Alembic', group: 'Backend' },
  { label: 'asyncpg', group: 'Backend' },

  { label: 'Docker', group: 'Tools' },
  { label: 'CI/CD', group: 'Tools' },
  { label: 'ESLint', group: 'Tools' },
  { label: 'Prettier', group: 'Tools' },
];
