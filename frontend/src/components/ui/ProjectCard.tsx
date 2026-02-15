import { Card } from '../ui/Card';

export function ProjectCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <div className='flex items-center gap-2'>
        {icon ? <span className='text-white/70'>{icon}</span> : null}
        <h2 className='text-base font-semibold'>{title}</h2>
      </div>
      <div className='mt-4 text-sm text-white/70'>{children}</div>
    </Card>
  );
}
