import * as React from 'react';
import Link from 'next/link';
import { QrCode } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <Link href={'/'} className="font-bold flex items-center gap-1 uppercase">
      <QrCode />
      Nextfrix
    </Link>
  );
};
