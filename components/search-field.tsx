import * as React from 'react';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { Kbd, KbdGroup } from './ui/kbd';
import { Search } from 'lucide-react';

interface Props {
  className?: string;
}

export const SearchField: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
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
    </div>
  );
};
