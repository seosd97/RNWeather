import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import normalize from 'react-native-normalize';
import DivideLine from './DivideLine';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: normalize(10),
  },
  countryText: {
    fontSize: 17,
    textAlign: 'center',
  },
});

const Header = ({country}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.countryText}>{country}</Text>
      <DivideLine />
    </View>
  );
};

export default Header;
