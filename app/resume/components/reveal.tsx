import * as motion from 'motion/react-client';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}
export default function Reveal({ children, className = '' }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 75, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
