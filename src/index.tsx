import React, { FC } from 'react';
import type { ShaperProps } from './models';
import ShapeSelector from './ShapeSelector';
import { Container, Position } from './styles';
import { useShaperQty } from './useShaperQty';

export { ShapeName } from './ShapeSelector/models';
export { ShaperTheme } from './models';

const Shaper: FC<ShaperProps> = (props) => {
  const { ref, qty } = useShaperQty(props);

  return (
    <Position {...props} aria-hidden role="img">
      <Container ref={ref} {...props}>
        <ShapeSelector {...props} qty={qty} />
      </Container>
    </Position>
  );
};

export default Shaper;
