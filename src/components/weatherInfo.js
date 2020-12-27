import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import moment from 'moment-timezone';
import * as tempUtils from '../modules/temperature';
import WeatherDetailElement from './weatherDetailElement';
import DivideLine from './DivideLine';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: normalize(10),
  },
  locationContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: normalize(10),
  },
  cityText: {
    fontSize: normalize(17),
  },
  localityText: {
    fontSize: normalize(25),
    fontWeight: 'bold',
  },
  dateContainer: {
    marginTop: normalize(10),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  weekText: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    marginRight: 3,
  },
  monthText: {
    fontSize: normalize(15),
  },
  currentWeatherContainer: {
    paddingTop: normalize(40),
    paddingBottom: normalize(60),
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: 10,
  },
  weatherDesc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // NOTE: web image require fixed size.
  //       So should remove after download image.
  weatherIcon: {
    width: normalize(40),
    height: normalize(40),
  },
  mainWeatherText: {
    fontSize: normalize(17),
  },
  mainTempText: {
    fontSize: normalize(70),
    fontWeight: 'bold',
  },
  perceivedTempText: {
    fontSize: normalize(15),
    paddingLeft: normalize(10),
  },
  detailContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: normalize(5),
  },
  detailElement: {
    width: '50%',
  },
});

const weatherDetails = [
  {key: 'sunrise', label: 'sunrise'},
  {key: 'sunset', label: 'sunset'},
  {key: 'wind_speed', label: 'wind speed'},
  {key: 'uvi', label: 'UV'},
  {key: 'humidity', label: '습도'},
  {key: 'visibility', label: '가시거리'},
];

const WeatherInfo = ({locationData, weatherData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.cityText}>{locationData.city.long_name}</Text>
        <Text style={styles.localityText}>
          {locationData.locality.long_name}
        </Text>
        <View style={styles.dateContainer}>
          {/* <Text>
            {moment
              .unix(weatherData.current.dt)
              .tz(weatherData.timezone)
              .format('hh:mm')}
          </Text> */}
          <Text style={styles.weekText}>
            {moment
              .unix(weatherData.current.dt)
              .tz(weatherData.timezone)
              .format('dddd')}
            ,
          </Text>
          <Text style={styles.monthText}>
            {moment
              .unix(weatherData.current.dt)
              .tz(weatherData.timezone)
              .format('D MMMM')}
          </Text>
        </View>
      </View>
      <DivideLine />

      <View style={styles.currentWeatherContainer}>
        <View style={styles.weatherDesc}>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`,
            }}
          />
          <Text style={styles.mainWeatherText}>
            {weatherData.current.weather[0].main}
          </Text>
        </View>
        <Text style={styles.mainTempText}>
          {tempUtils.tempToString(Math.floor(weatherData.current.temp))}
        </Text>
        <Text style={styles.perceivedTempText}>
          {`but feels like ${tempUtils.tempToString(
            Math.floor(weatherData.current.feels_like),
          )}`}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        {/* TODO: need to fix */}
        {weatherDetails.map((d, i) => {
          let value = weatherData.current[d.key];

          if (d.key === 'sunrise' || d.key === 'sunset') {
            value = moment.unix(value).tz(weatherData.timezone).format('hh:mm');
          } else if (d.key === 'wind_speed') {
            value = `${value}m/s`;
          } else if (d.key === 'humidity') {
            value = `${value}%`;
          } else if (d.key === 'visibility') {
            value = value > 999 ? `${value / 1000}km` : `${value}m`;
          }

          return (
            <WeatherDetailElement
              key={`weatherDetail_${i}`}
              desc={d.label}
              value={value}
              style={styles.detailElement}
            />
          );
        })}
      </View>
      <DivideLine />
    </View>
  );
};

WeatherInfo.propTypes = {
  locationData: PropTypes.object.isRequired,
  weatherData: PropTypes.object.isRequired,
};

export default WeatherInfo;
