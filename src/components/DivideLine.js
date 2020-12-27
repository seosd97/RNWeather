import React from 'react';
import {StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    borderRadius: 5,
    marginVertical: normalize(10),
  },
});

const DivideLine = () => {
  return <View style={styles.line} />;
};

export default DivideLine;
