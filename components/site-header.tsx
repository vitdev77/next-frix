import * as React from 'react';
import { ThemeToggle } from './theme-toggle';
import { LayoutToggle } from './layout-toggle';
import { Separator } from './ui/separator';
import { SiteLogo } from './site-logo';
import { Button } from './ui/button';
import { Container } from './site-container';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const SiteHeader: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('bg-background sticky top-0 z-50 w-full', className)}>
      <Container>
        <div className="flex items-center justify-between py-2 w-full">
          <SiteLogo />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <LayoutToggle className="3xl:flex hidden" />

            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-4 3xl:flex hidden"
            />

            <ThemeToggle />

            <Button>Войти</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
