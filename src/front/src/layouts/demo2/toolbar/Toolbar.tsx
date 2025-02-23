import { Container } from '@/admin/components';
import { ReactNode } from 'react';

export interface IToolbarProps {
  children?: ReactNode;
}

const Toolbar = ({ children }: IToolbarProps) => {
  return (
    <div className="mb-5 lg:mb-10">
      <Container className="flex items-center justify-between flex-wrap gap-3">
        {children}
      </Container>
    </div>
  );
};

export { Toolbar };
