import * as React from 'react';
import Link from 'next/link';
import { IconBarcode } from '@tabler/icons-react';

export const Logo: React.FC = () => {
  return (
    <Link href={'/'} className="font-bold flex items-center gap-1 uppercase">
      <IconBarcode />
      Nextfrix
    </Link>
  );
};
