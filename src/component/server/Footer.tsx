import Image from 'next/image';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <footer className="flex flex-row py-8 text-sm text-center md:text-left bg-zinc-900">
      <div className='mx-auto container flex flex-col md:flex-row justify-start'>
        <div className='flex flex-col justify-center items-center md:items-start'>
          <Image priority={false} width={330} height={67} alt='crunchcramble_logo' src='/assets/images/crunchbreads_logo_2.png' />
          <p className="select-none text-white font-bold opacity-35 no-underline hover:no-underline">&copy; 2024 Crunchbreads </p>
        </div>
        <FooterLink />
      </div>
    </footer>
  )
}

export default Footer;