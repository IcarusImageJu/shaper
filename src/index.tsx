import type { FC } from 'react';
import React from 'react';
import type { ShaperProps } from './models';
import ShapeSelector from './ShapeSelector';
import { Container } from './styles';

export { ShapeName } from './ShapeSelector/models';

const Shaper: FC<ShaperProps> = (props) => {
  return (
    <Container {...props}>
      <ShapeSelector {...props} qty={100} />
    </Container>
  );
};

export default Shaper;
