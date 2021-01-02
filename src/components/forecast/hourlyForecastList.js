import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import HourlyForecastItem from './hourlyForecastItem';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {},
  titleText: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    marginBottom: normalize(15),
    paddingLeft: normalize(5),
  },
});
const HourlyForecastList = ({forecastData, timezone}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hourly Forecast</Text>
      {/* TODO : Should change to FlatList */}
      <ScrollView horizontal>
        {forecastData.map((w, i) => {
          return (i + 1) % 3 === 0 ? (
            <HourlyForecastItem
              key={`HourlyForecast_${i}`}
              timezone={timezone}
              weather={w}
            />
          ) : null;
        })}
      </ScrollView>
    </View>
  );
};

HourlyForecastList.propTypes = {
  forecastData: PropTypes.array.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default HourlyForecastList;
