import * as motion from 'motion/react-client';

export default async function Logo() {
  return (
    <motion.div
      className='text-xl pl-2 text-sky-800 flex'
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <span className='text-violet-500'>Q</span>
      <span>plot</span>
    </motion.div>
  );
}
