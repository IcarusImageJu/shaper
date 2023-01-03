import type { ShapeName } from './ShapeSelector/models';

export enum ShaperTheme {
  Nature = 'NATURE',
  Basic = 'BASIC',
  Tech = 'TECH',
  All = 'All',
}

export type ShaperProps = {
  colorScheme?: {
    backgroundColor?: string[];
    shapeColor?: string[];
  };
  /**
   * Select a theme.
   * @default ShaperTheme.All
   * @author Julien Bonté
   *
   * @type {?ShaperTheme[]}
   */
  theme?: ShaperTheme[];
  /**
   * Tile size
   * @default 50
   * @author Julien Bonté
   *
   * @type {?number}
   */
  tileSize?: number;
  /**
   * Remove specific shape
   * @author Julien Bonté
   *
   * @type {?ShapeName[]}
   */
  blackList?: ShapeName[];
  /**
   * Only show specific shape
   * @author Julien Bonté
   *
   * @type {?ShapeName[]}
   */
  selection?: ShapeName[];
  /**
   * Number between 0 and 100.
   * 0 = No "Lost" shape.
   * 100 = Every shape's "Lost".
   * @default 0
   * @author Julien Bonté
   *
   * @type {?number}
   */
  loss?: number;
  /**
   * Want a reproductible content ?
   * Add a seed to keep the same result
   * @default ["Shaper"]
   * @author Julien Bonté
   *
   * @type {?(number | string)}
   */
  seed?: string[];
};
