import * as motion from 'motion/react-client';

export default function Reveal({
  children,
  ...others
}: {
  children: any;
  [rest: string]: any;
}) {
  return (
    <motion.div
      initial={{ y: 75, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      {...others}
    >
      {children}
    </motion.div>
  );
}
