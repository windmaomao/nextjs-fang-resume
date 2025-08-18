import * as motion from 'motion/react-client';

export default function Keyword({ children }: { children: string }) {
  return (
    <motion.span
      key={children}
      className='inline-block italic font-semibold'
      whileHover={{ y: -1, x: 1 }}
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.span>
  );
}
