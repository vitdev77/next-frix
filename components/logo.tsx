import * as React from 'react';
import { IconPyramid } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link href={'/'} className={className}>
      <IconPyramid />
      <span className="text-base font-bold uppercase">Nextfrix</span>
    </Link>
  );
};
