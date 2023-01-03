import { defaultShapeColor, defaultBackgroundColor } from '../shapes/constants';
import type { ShaperProps } from '../models';
import { ShapeName, ShapeSelect } from './models';
import Chance from 'chance';
import { shapeList } from './shapeList';
import { defaultSeed } from '../constants';

export const useShapeRandomizer = ({
  shapes,
  colorScheme,
  loss = 0,
  seed = defaultSeed,
}: ShaperProps & {
  shapes: ShapeSelect[];
}) => {
  const chance = new Chance(...seed);
  const index = chance.integer({ min: 0, max: shapes.length - 1 });
  const isLost = chance.bool({ likelihood: loss });

  const LostShape = shapeList.find(
    (i) => i.name === ShapeName.Lost
  ) as ShapeSelect;

  const Shape = isLost
    ? LostShape?.shape
    : (shapes[index] as ShapeSelect).shape;

  // Shape Color randomizer
  let shapeColor = defaultShapeColor;
  if (colorScheme?.shapeColor) {
    const colorIndex = chance.integer({
      min: 0,
      max: colorScheme.shapeColor.length - 1,
    });
    shapeColor = colorScheme.shapeColor?.[colorIndex] ?? defaultShapeColor;
  }

  // Background color randomizer
  let backgroundColor = defaultBackgroundColor;
  if (colorScheme?.backgroundColor) {
    const colorIndex = chance.integer({
      min: 0,
      max: colorScheme.backgroundColor.length - 1,
    });
    backgroundColor =
      colorScheme.backgroundColor?.[colorIndex] ?? defaultBackgroundColor;
  }

  return { Shape, shapeColor, backgroundColor };
};
