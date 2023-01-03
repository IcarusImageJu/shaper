import React from 'react';
import Square from '../shapes/Square';
import { ShaperTheme } from '../models';
import Circle from '../shapes/Circle';
import { ShapeName, ShapeSelect } from './models';
import Triangle from '../shapes/Triangle';
import Dot from '../shapes/Dot';
import Bridge from '../shapes/Bridge';
import Rectangle from '../shapes/Rectangle';
import Ring from '../shapes/Ring';
import Spike from '../shapes/Spike';
import Mountains from '../shapes/Mountains';
import Ramp from '../shapes/Ramp';
import Feather from '../shapes/Feather';
import Seed from '../shapes/Seed';
import Lost from '../shapes/Lost';

export const shapeList: ShapeSelect[] = [
  {
    name: ShapeName.Circle,
    shape: (props) => <Circle {...props} />,
    theme: [ShaperTheme.Basic, ShaperTheme.Nature],
  },
  {
    name: ShapeName.Square,
    shape: (props) => <Square {...props} />,
    theme: [ShaperTheme.Basic, ShaperTheme.Tech],
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
  {
    name: ShapeName.Bridge,
    shape: (props) => <Bridge {...props} />,
    theme: [ShaperTheme.Nature, ShaperTheme.Basic],
  },
  {
    name: ShapeName.Rectangle,
    shape: (props) => <Rectangle {...props} />,
    theme: [ShaperTheme.Basic, ShaperTheme.Tech],
  },
  {
    name: ShapeName.Ring,
    shape: (props) => <Ring {...props} />,
    theme: [ShaperTheme.Basic, ShaperTheme.Tech],
  },
  {
    name: ShapeName.Spike,
    shape: (props) => <Spike {...props} />,
    theme: [ShaperTheme.Basic, ShaperTheme.Nature],
  },
  {
    name: ShapeName.Mountains,
    shape: (props) => <Mountains {...props} />,
    theme: [ShaperTheme.Nature],
  },
  {
    name: ShapeName.Ramp,
    shape: (props) => <Ramp {...props} />,
    theme: [ShaperTheme.Basic],
  },
  {
    name: ShapeName.Feather,
    shape: (props) => <Feather {...props} />,
    theme: [ShaperTheme.Nature],
  },
  {
    name: ShapeName.Seed,
    shape: (props) => <Seed {...props} />,
    theme: [ShaperTheme.Nature, ShaperTheme.Basic],
  },
  { name: ShapeName.Lost, shape: () => <Lost />, theme: [] },
];
