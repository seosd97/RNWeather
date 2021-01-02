import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import DailyForecastItem from './dailyForecastItem';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {},
  titleText: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    marginBottom: normalize(15),
  },
  scrollContainer: {
    paddingHorizontal: normalize(5),
  },
});

const DailyForecastList = ({forecastData}) => {
  return (
    <View>
      <Text style={styles.titleText}>일일 예보</Text>
      <ScrollView style={styles.scrollContainer}>
        {forecastData.map((w, i) => {
          return (
            <DailyForecastItem key={`DailyForecastItem_${i}`} weather={w} />
          );
        })}
      </ScrollView>
    </View>
  );
};

DailyForecastList.propTypes = {
  forecastData: PropTypes.array.isRequired,
};

export default DailyForecastList;
