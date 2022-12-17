import React from 'react';
import Shaper, { ShapeName } from '@julienbonteweb/shaper';

const App = () => {
  return <Shaper tileSize={50} blackList={[ShapeName.Dot]} />;
};

export default App;
