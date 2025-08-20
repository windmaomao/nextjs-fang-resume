import * as motion from 'motion/react-client';
import { FiGitBranch } from 'react-icons/fi';

export default async function Logo() {
  return (
    <motion.div
      className='text-xl pl-2 pb-2 text-sky-800 flex items-center gap-2'
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <FiGitBranch />
      <div className='flex gap-3 items-end'>
        <span className=''>Fang Jin</span>
        <span className='font-light text-sm'>Frontend Engineer</span>
      </div>
    </motion.div>
  );
}
