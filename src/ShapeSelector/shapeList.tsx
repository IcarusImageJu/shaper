import React from 'react';
import Square from '../shapes/Square';
import { ShaperTheme } from '../models';
import Circle from '../shapes/Circle';
import { ShapeName, ShapeSelect } from './models';
import Triangle from '../shapes/Triangle';
import Dot from '../shapes/Dot';

export const shapeList: ShapeSelect[] = [
  {
    name: ShapeName.Circle,
    shape: (props) => <Circle {...props} />,
    theme: [ShaperTheme.Basic, ShaperTheme.Nature],
  },
  {
    name: ShapeName.Square,
    shape: (props) => <Square {...props} />,
    theme: [ShaperTheme.Basic],
  },
  {
    name: ShapeName.Triangle,
    shape: (props) => <Triangle {...props} />,
    theme: [ShaperTheme.Basic],
  },
  {
    name: ShapeName.Dot,
    shape: (props) => <Dot {...props} />,
    theme: [ShaperTheme.Basic, ShaperTheme.Nature],
  },
];
