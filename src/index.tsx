import type { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
import type { ShaperTheme } from './models';
import Circle from './shapes/Circle';
import Square from './shapes/Square';
import Triangle from './shapes/Triangle';
import { Div } from './tags';

export type ShaperProps = {
  colorScheme?: string[];
  theme?: ShaperTheme[];
  tileSize?: string;
};

const Container = styled(Div)<ShaperProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fill, minmax(${props.tileSize || '1rem'}, 1fr))`};
`;

const Shaper: FC<ShaperProps> = (props) => {
  return (
    <Container {...props}>
      <Circle />
      <Square />
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
    </Container>
  );
};

export default Shaper;
