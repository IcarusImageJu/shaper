import styled from 'styled-components';
import { Div } from './tags';
import type { ShaperProps } from './models';

export const Container = styled(Div)<ShaperProps>`
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0;
  flex: 1;
  flex-grow: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Position = styled(Div)<ShaperProps>`
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0;
  flex: 1;
  flex-grow: 1;
  position: relative;
`;
