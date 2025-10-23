'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui';
import { BiAdjust } from 'react-icons/bi';

export const ThemeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      title="Toggle Theme"
    >
      <BiAdjust />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
