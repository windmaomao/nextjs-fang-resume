import * as motion from 'motion/react-client';
import Image from 'next/image';

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/windmaomao/',
    src: '/resume/contact-linkedin.png',
    width: 93,
    height: 24,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@windmaomao',
    src: '/resume/contact-medium.png',
    width: 90,
    height: 24,
  },
  {
    name: 'Amazon',
    href: 'https://www.amazon.com/stores/Fang-Jin/author/B09M7FFMJP',
    src: '/resume/contact-amazon.png',
    width: 85,
    height: 36,
  },
  {
    name: 'Codepen',
    href: 'https://codepen.io/windmaomao',
    src: '/resume/contact-codepen.png',
    width: 106,
    height: 20,
  },
  {
    name: 'Stackoverflow',
    href: 'https://stackoverflow.com/users/288096/windmaomao',
    src: '/resume/contact-stackoverflow.png',
    width: 114,
    height: 30,
  },
];

export default function Findme() {
  return (
    <div className='my-7 flex flex-row flex-wrap justify-around items-center gap-x-24 gap-y-8'>
      {socials.map((s) => (
        <motion.a
          key={s.name}
          href={s.href}
          target='_blank'
          title={`${s.name} profile`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={s.src}
            width={s.width}
            height={s.height}
            alt={`Contact ${s.name}`}
          />
        </motion.a>
      ))}
    </div>
  );
}
