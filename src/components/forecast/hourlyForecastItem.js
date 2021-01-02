import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import moment from 'moment-timezone';
import * as TempUtils from '../../modules/temperature';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },
  icon: {
    width: normalize(40),
    height: normalize(40),
  },
  iconContainer: {
    justifyContent: 'center',
  },
  timeText: {
    fontSize: normalize(13),
  },
  popText: {
    fontSize: normalize(14),
  },
  tempText: {
    fontSize: normalize(15),
  },
  devideLine: {
    width: 2,
    height: '100%',
    marginHorizontal: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
  },
});

const DevideLine = () => <View style={styles.devideLine} />;

const HourlyForecastItem = ({weather, timezone}) => {
  const timestamp = moment.unix(weather.dt).tz(timezone);
  const isLastTime = timestamp.hour() >= 21;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.timeText}>{`${timestamp.format('HH')}h`}</Text>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={{
              uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
            }}
          />
        </View>
        <Text style={styles.popText}>{`${Math.floor(
          weather.pop * 100,
        )}%`}</Text>
        <Text style={styles.tempText}>
          {TempUtils.tempToString(Math.floor(weather.temp))}
        </Text>
      </View>
      {isLastTime && <DevideLine />}
    </React.Fragment>
  );
};

HourlyForecastItem.propTypes = {
  weather: PropTypes.object.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default HourlyForecastItem;
