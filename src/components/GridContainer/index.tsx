import React, { ReactNode } from 'react';

import { Container } from './styles';

type GridContainerProps = {
  children: ReactNode;
  sm?: boolean;
};

function GridContainer({ children, sm = false }: GridContainerProps) {
  return <Container sm={sm}>{children}</Container>;
}

GridContainer.defaultProps = {
  sm: false,
};

export default GridContainer;
