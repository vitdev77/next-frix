import * as React from 'react';
import Link from 'next/link';
import { QrCode } from 'lucide-react';

export const SiteLogo: React.FC = () => {
  return (
    <Link href={'/'} className="font-bold">
      <QrCode />
    </Link>
  );
};
