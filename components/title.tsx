import * as React from 'react';
import { cn } from '@/lib/utils';

type TitleSize = 'h4' | 'h3' | 'h2' | 'h1';

interface Props {
  text: string;
  size?: TitleSize;
  className?: string;
}

export const Title: React.FC<Props> = ({ text, size = 'h4', className }) => {
  const mapTagBySize = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
  } as const;

  const mapClassNameBySize = {
    h1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
    h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  } as const;

  return React.createElement(
    mapTagBySize[size],
    { className: cn(mapClassNameBySize[size], className) },
    text
  );
};
