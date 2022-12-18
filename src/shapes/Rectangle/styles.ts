import { Span } from '../../tags';
import styled from 'styled-components';
import type { Shape } from '../models';
import { defaultBackgroundColor, defaultShapeColor } from '../constants';

export const RectangleStyled = styled(Span)<
  Shape & { rotation: number; ratio: number }
>`
  font-size: 0;
  width: 100%;
  aspect-ratio: 1;
  transform: ${(props) => `rotate(${props.rotation * 90}deg)`};
  background-color: ${(props) =>
    props.backgroundColor || defaultBackgroundColor};
`;

export const RectangleShapeStyled = styled(Span)<
  Shape & { rotation: number; ratio: number }
>`
  font-size: 0;
  height: 100%;
  aspect-ratio: ${(props) => ((100 / 4) * props.ratio) / 100};
  background-color: ${(props) => props.shapeColor || defaultShapeColor};
  display: block;
`;
