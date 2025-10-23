import * as React from 'react';

interface Props {
  className?: string;
}

export const SiteFooter: React.FC<Props> = ({ className }) => {
  return <div className={className}>Footer</div>;
};
