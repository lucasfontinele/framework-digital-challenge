import React, { ReactNode } from 'react';

import { Container } from './styles';

type GridContainerProps = {
  children: ReactNode;
};

function GridContainer({ children }: GridContainerProps) {
  return <Container>{children}</Container>;
}

export default GridContainer;
