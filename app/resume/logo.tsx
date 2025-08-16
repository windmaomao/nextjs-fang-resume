import Motion from './motion';

export default async function Logo() {
  return (
    <div className='text-xl pl-2 text-sky-800 flex gap-[8px]'>
      <Motion
        className='text-violet-500'
        animate={{ x: 5 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Q
      </Motion>
      <span>plot</span>
    </div>
  );
}
