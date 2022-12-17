import { shapeList } from './shapeList';
import { ShaperProps, ShaperTheme } from '../models';

export const useShapeSelector = ({
  theme = [ShaperTheme.All],
  blackList = [],
  selection = [],
}: ShaperProps) => {
  let shapes = shapeList;
  if (selection.length > 0) {
    return { shapes: shapes.filter((s) => selection.includes(s.name)) };
  }
  if (!theme.includes(ShaperTheme.All)) {
    shapes = shapes.filter((s) => s.theme.some((t) => theme?.includes(t)));
  }
  shapes = shapes.filter((s) => !blackList.includes(s.name));
  return { shapes };
};
