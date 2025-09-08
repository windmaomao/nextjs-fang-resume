import * as motion from 'motion/react-client';
import Avatar from './avatar';

export default function Logo() {
  return (
    <motion.div
      className='text-xl pl-2 pb-2 text-sky-800 dark:text-sky-200 flex items-center gap-4'
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <Avatar />
      <div className='flex gap-3 items-end'>
        <span className=''>Fang Jin</span>
        <span className='font-light text-sm'>Frontend Engineer</span>
      </div>
    </motion.div>
  );
}
