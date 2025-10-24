// https://www.freecodecamp.org/news/how-to-build-a-reusable-keyboard-shortcut-listener-component-in-react/
import { motion } from 'framer-motion';
import * as React from 'react';

export default function OverlayWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/50 "
    >
      {children}
    </motion.div>
  );
}
