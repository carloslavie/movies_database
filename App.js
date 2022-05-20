import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './screens/Home';

const YourApp = () => {
  return (
    <View style={styles.sliderContainer}>
      <Home />
    </View>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default YourApp;
