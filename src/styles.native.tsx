import styled from 'styled-components';
import { Div } from './tags';
import type { ShaperProps } from './models';
import { defaultTileSize } from './constants';

export const Container = styled(Div)<ShaperProps>`
height: 100%;
width: 100%;
font-size: 0;
overflow: hidden;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
flex-wrap: wrap;
& > * {
  ${(props) => {
    const calc = props.tileSize || defaultTileSize;
    return {
      width: `${calc}px`,
      height: `${calc}px`,
    };
  }}
`;

export const Position = styled(Div)<ShaperProps>`
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0;
  flex: 1;
  flex-grow: 1;
  position: relative;
`;
