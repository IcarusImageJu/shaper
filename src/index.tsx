import React, { FC } from 'react';
import type { ShaperProps } from './models';
import ShapeSelector from './ShapeSelector';
import { Container } from './styles';
import { useShaperQty } from './useShaperQty';

export { ShapeName } from './ShapeSelector/models';
export { ShaperTheme } from './models';

const Shaper: FC<ShaperProps> = (props) => {
  const { ref, qty } = useShaperQty(props);

  return (
    <Container ref={ref} {...props} aria-hidden role="img">
      <ShapeSelector {...props} qty={qty} />
    </Container>
  );
};

export default Shaper;
