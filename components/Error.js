/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Error = ({errorText1, errorText2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorText1}</Text>
      <Text style={styles.errorText}>{errorText2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontWeight: 'bold',
  },
});
export default Error;
