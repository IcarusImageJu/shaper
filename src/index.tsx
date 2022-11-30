import type { FC } from 'react';
import React from 'react';
import type { ShaperTheme } from './models';

export type ShaperProps = {
  colorScheme?: string[];
  theme?: ShaperTheme;
  tileSize?: number;
};

const Shaper: FC<ShaperProps> = ({}) => {
  return <h1>Shaper</h1>;
};

export default Shaper;
