import * as motion from 'motion/react-client';

export default async function Logo() {
  return (
    <div className='text-xl pl-2 text-sky-800 flex gap-[8px]'>
      <motion.div
        className='text-violet-500'
        animate={{ x: 5 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Q
      </motion.div>
      <span>plot</span>
    </div>
  );
}
