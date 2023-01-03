import type { FC } from 'react';
import type { Shape } from '../shapes/models';
import type { ShaperTheme } from '../models';

export type ShapeSelect = {
  name: ShapeName;
  shape: FC<Shape>;
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
  Spike = 'Spike',
  Mountains = 'Mountains',
  Feather = 'Feather',
  Seed = 'Seed',
  Ramp = 'Ramp',
  Water = 'Water',
  Lost = 'Lost',
}
