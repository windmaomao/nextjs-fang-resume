'use client';

import { ReactNode } from 'react';
import * as motion from 'motion/react-client';

function Motion({
  type = 'div',
  children,
  ...props
}: {
  type?: 'div';
  children: any;
  [others: string]: any;
}): ReactNode {
  const Component = type ? motion[type] : motion.div;

  return <Component {...props}>{children}</Component>;
}

export default Motion;
