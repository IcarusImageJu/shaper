import React from 'react';
import Shaper from '@julienbonteweb/shaper';

const App = () => {
  return (
    <Shaper
      tileSize={50}
      // selection={[ShapeName.Feather]}
      colorScheme={{
        shapeColor: ['#F0EAD2', '#DDE5B6', '#ADC178', '#A98467', '#6C584C'],
        backgroundColor: [
          '#F0EAD2',
          '#DDE5B6',
          '#ADC178',
          '#A98467',
          '#6C584C',
        ],
      }}
    />
  );
};

export default App;
