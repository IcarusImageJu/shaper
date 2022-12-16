import React from 'react';
import { StyleSheet, View } from 'react-native';
import Shaper from '@julienbonteweb/shaper';

const App = () => {
  return (
    <View style={styles.container}>
      <Shaper />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
