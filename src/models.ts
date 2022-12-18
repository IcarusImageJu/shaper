import type { ShapeName } from './ShapeSelector/models';

export enum ShaperTheme {
  Nature = 'NATURE',
  Basic = 'BASIC',
  Digital = 'DIGITAL',
  All = 'All',
}

export type ShaperProps = {
  colorScheme?: {
    backgroundColor: string[];
    shapeColor: string[];
  };
  theme?: ShaperTheme[];
  tileSize?: number;
  blackList?: ShapeName[];
  selection?: ShapeName[];
};
