import React from 'react';
import Shaper, { ShaperTheme } from '@julienbonteweb/shaper';

const App = () => {
  return (
    <Shaper
      tileSize={150}
      seed={['Julien']}
      loss={30}
      theme={[ShaperTheme.Basic]}
      colorScheme={{
        shapeColor: ['#F0EAD2', '#DDE5B6'],
      }}
    />
  );
};

export default App;
