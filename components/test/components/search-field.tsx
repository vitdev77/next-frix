// https://www.freecodecamp.org/news/how-to-build-a-reusable-keyboard-shortcut-listener-component-in-react/
'use client';

import * as React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../../ui/input-group';
import { Kbd, KbdGroup } from '../../ui/kbd';
import { Search } from 'lucide-react';
import { useKeyBindings } from '@/components/test/hooks/use-key-bindings';
import { AnimatePresence } from 'framer-motion';
import SearchBox from './search-box';

interface Props {
  className?: string;
}

export const SearchField: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  useKeyBindings([
    {
      keys: ['Control', 'k'], // Listen for "Ctrl + K"
      callback: () => setIsOpen((prev) => !prev), // Toggle the search box
    },
    {
      keys: ['Escape'], // Listen for "Escape"
      callback: () => setIsOpen(false), // Close the search box
    },
  ]);

  return (
    <div className={className}>
      <InputGroup>
        <InputGroupInput id="searchField" placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </InputGroupAddon>
      </InputGroup>
      <AnimatePresence>
        {isOpen && <SearchBox close={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
};
