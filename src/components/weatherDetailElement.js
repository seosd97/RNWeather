import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View, ViewPropTypes} from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: normalize(100),
    paddingVertical: normalize(5),
    paddingHorizontal: 5,
  },
  desc: {
    flex: 1,
    marginRight: 5,
    fontSize: normalize(15),
  },
  valueText: {
    fontSize: normalize(15),
  },
});

// TODO: Should change desc to image after get images
const WeatherDetailElement = ({desc, value, style}) => {
  const containerStyle = useMemo(
    () => StyleSheet.flatten([styles.container, style]),
    [style],
  );
  return (
    <View style={containerStyle}>
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

WeatherDetailElement.proptypes = {
  desc: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default WeatherDetailElement;
