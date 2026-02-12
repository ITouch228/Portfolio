import { useState } from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mdalegpn', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section
      id='contact'
      title='Контакты'
      subtitle='Открыт к предложениям, интересным проектам и коллаборациям.'
    >
      <Reveal>
        <div className='grid gap-5 md:grid-cols-2'>
          <Card>
            <p className='text-sm text-white/70'>
              Email:{' '}
              <a
                className='text-white hover:underline'
                href='mailto:danilyatsenko200612354678@gmail.com'
              >
                danilyatsenko200612354678@gmail.com
              </a>
            </p>
            <p className='mt-3 text-sm text-white/70'>
              GitHub:{' '}
              <a
                className='text-white hover:underline'
                href='https://github.com/ITouch228'
                target='_blank'
                rel='noreferrer'
              >
                github.com/ITouch228
              </a>
            </p>
            <p className='mt-3 text-sm text-white/70'>
              Telegram:{' '}
              <a
                className='text-white hover:underline'
                href='https://t.me/ITouch06'
                target='_blank'
                rel='noreferrer'
              >
                @ITouch06
              </a>
            </p>
          </Card>

          <Card>
            <form onSubmit={handleSubmit}>
              <label className='text-xs text-white/60'>Ваше имя</label>
              <input
                type='text'
                name='name'
                required
                placeholder='Как к вам обращаться?'
                className='mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25'
              />

              <label className='text-xs text-white/60'>Email</label>
              <input
                type='email'
                name='email'
                required
                placeholder='Ваш email'
                className='mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25'
              />

              <label className='mt-5 block text-xs text-white/60'>
                Сообщение
              </label>
              <textarea
                name='message'
                required
                placeholder='Коротко о задаче/роли'
                className='mt-2 w-full min-h-[120px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25'
              />

              <input
                type='hidden'
                name='_subject'
                value='Новое сообщение с портфолио'
              />

              <div className='mt-5'>
                <Button type='submit' disabled={status === 'sending'}>
                  {status === 'idle' && 'Отправить'}
                  {status === 'sending' && 'Отправка...'}
                  {status === 'success' && 'Отправлено ✓'}
                  {status === 'error' && 'Ошибка, попробуйте снова'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Reveal>
    </Section>
  );
}
