import * as React from 'react';
import { ThemeToggle } from './theme-toggle';
import { LayoutToggle } from './layout-toggle';
import { Separator } from './ui/separator';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Container } from './container';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SearchField } from './search-field';
import { CommandMenu } from './command-menu';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('bg-background sticky top-0 z-50 w-full', className)}>
      <Container>
        <div className="flex items-center justify-between py-3.5 w-full">
          <Logo className="flex items-center gap-1" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            {/* <SearchField /> */}
            <CommandMenu />

            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-4 3xl:flex hidden"
            />

            <LayoutToggle className="3xl:flex hidden" />

            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-4 3xl:flex hidden"
            />

            <ThemeToggle />

            <Link href={'/dashboard'}>
              <Button>Dashboard</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
