import styled from 'styled-components';
import { Div } from './tags';
import type { ShaperProps } from './models';

export const Container = styled(Div)<ShaperProps>`
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0;
  flex: 1;
  height: 100%;
  flex-grow: 1;
`;
