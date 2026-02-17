export function Footer() {
  return (
    <footer className='border-t border-white/10'>
      <div className='mx-auto max-w-6xl px-5 py-10 text-sm text-white/55'>
        <div className='flex flex-col md:flex-row gap-2 md:items-center md:justify-between'>
          <span>© {new Date().getFullYear()} itouch.dev</span>
          <span className='text-white/40'>
            Fullstack-разработчик • React • FastAPI • PostgreSQL
          </span>
        </div>
      </div>
    </footer>
  );
}
