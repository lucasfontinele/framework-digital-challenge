import styled, { css } from 'styled-components';

export const Container = styled.div<{ sm: boolean }>`
  width: 100%;
  max-width: 888px;

  ${({ sm }) =>
    sm &&
    css`
      max-width: 655px;
    `}

  margin: 0 auto;
`;
