import { defaultShapeColor, defaultBackgroundColor } from '../shapes/constants';
import type { ShaperProps } from '../models';
import type { ShapeSelect } from './models';
import { randomIntFromInterval } from '../utils';

export const useShapeRandomizer = ({
  shapes,
  colorScheme,
}: ShaperProps & {
  shapes: ShapeSelect[];
}) => {
  const index = randomIntFromInterval(0, shapes.length - 1);
  const Shape = (shapes[index] as ShapeSelect).shape;

  // Shape Color randomizer
  let shapeColor = defaultShapeColor;
  if (colorScheme?.shapeColor) {
    const colorIndex = randomIntFromInterval(
      0,
      colorScheme.shapeColor.length - 1
    );
    shapeColor = colorScheme.shapeColor?.[colorIndex] ?? defaultShapeColor;
  }

  // Background color randomizer
  let backgroundColor = defaultBackgroundColor;
  if (colorScheme?.backgroundColor) {
    const colorIndex = randomIntFromInterval(
      0,
      colorScheme.backgroundColor.length - 1
    );
    backgroundColor =
      colorScheme.backgroundColor?.[colorIndex] ?? defaultBackgroundColor;
  }

  return { Shape, shapeColor, backgroundColor };
};
