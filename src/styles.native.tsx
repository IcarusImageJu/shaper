import styled from 'styled-components';
import { Div } from './tags';
import type { ShaperProps } from './models';

export const Container = styled(Div)<ShaperProps>`
  flex-direction: row;
  flex-wrap: wrap;
`;
