import { Container } from '@/components/container';
import * as React from 'react';

interface Props {
  className?: string;
}

const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container>Home Page</Container>
    </div>
  );
};

export default HomePage;
