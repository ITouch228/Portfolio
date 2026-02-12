import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

export function Contact() {
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
            <form onSubmit={e => e.preventDefault()}>
              <label className='text-xs text-white/60'>Имя</label>
              <input
                className='mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25'
                placeholder='Как к тебе обращаться?'
              />

              <label className='mt-5 block text-xs text-white/60'>
                Сообщение
              </label>
              <textarea
                className='mt-2 w-full min-h-[120px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25'
                placeholder='Коротко о задаче/роли'
              />

              <div className='mt-5'>
                <Button type='submit'>Отправить (заглушка)</Button>
              </div>
            </form>
          </Card>
        </div>
      </Reveal>
    </Section>
  );
}
