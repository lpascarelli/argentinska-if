'use client';

import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <motion.body
      initial='hidden'
      animate='visible'
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
      transition={{ duration: 0.8 }}
      className={inter.className}
    >
      {children}
    </motion.body>
  );
}
