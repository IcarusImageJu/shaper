import type { FC } from 'react';
import type { ShaperTheme } from '../models';

export type ShapeSelect = {
  name: ShapeName;
  shape: FC;
  theme: ShaperTheme[];
};

export enum ShapeName {
  Circle = 'Circle',
  Square = 'Square',
  Triangle = 'Triangle',
  Dot = 'Dot',
  Bridge = 'Bridge',
  Rectangle = 'Rectangle',
  Ring = 'Ring',
}
