import { shapeList } from './shapeList';
import { ShaperProps, ShaperTheme } from '../models';

export const useShapeSelector = ({
  theme = [ShaperTheme.All],
  blackList = [],
}: ShaperProps) => {
  let shapes = shapeList;
  if (!theme.includes(ShaperTheme.All)) {
    shapes = shapes.filter((s) => s.theme.some((t) => theme?.includes(t)));
  }
  shapes = shapes.filter((s) => !blackList.includes(s.name));
  return { shapes };
};
