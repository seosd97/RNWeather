import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import config from 'react-native-config';
import normalize from 'react-native-normalize';
import GeoLocation from '@react-native-community/geolocation';

import countries from 'i18n-iso-countries';
import moment from 'moment-timezone';
import Axios from 'axios';

import {getWeatherData} from '../modules/weather-api';
import * as tempUtils from '../modules/temperature';
import WeatherInfo from '../components/weatherInfo';
import Header from '../components/header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const WeatherPage = () => {
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const updateLocation = useCallback(
    async (geo) => {
      try {
        const locData = await Axios.get(
          `${config.GOOGLE_MAP_ENDPOINT}?latlng=${geo.coords.latitude},${geo.coords.longitude}&key=${config.GOOGLE_API_KEY}`,
        );

        const result = locData.data.results[0];
        const country = result.address_components.find((addr) =>
          addr.types.includes('country'),
        );
        const city = result.address_components.find((addr) =>
          addr.types.includes('administrative_area_level_1'),
        );
        let locality = result.address_components.find(
          (addr) =>
            addr.types.includes('locality') ||
            addr.types.includes('sublocality_level_1'),
        );

        // NOTE: Some location has only sublocality type.
        locality =
          locality ||
          result.address_components.find((addr) =>
            addr.types.includes('sublocality'),
          );

        setLocation({
          country,
          city,
          locality,
          geo: result.geometry.location,
        });
      } catch (err) {
        console.error(err);
      }
    },
    [setLocation],
  );

  useEffect(() => {
    GeoLocation.getCurrentPosition(updateLocation, (err) => console.error(err));
  }, [updateLocation]);

  useEffect(() => {
    if (location == null) {
      return;
    }

    console.log('get weather');
    const getWeather = async () => {
      try {
        const weather = await getWeatherData(
          location.geo.lat,
          location.geo.lng,
          ['minutely'],
          'metric',
        );

        setCurrentWeather(weather);
      } catch (err) {
        console.error(err);
      }
    };

    getWeather();
  }, [location]);

  return (
    <ScrollView style={styles.container}>
      {location && currentWeather && (
        <React.Fragment>
          <Header country={location.country.long_name} />
          <WeatherInfo weatherData={currentWeather} locationData={location} />
        </React.Fragment>
      )}
    </ScrollView>
  );
};

export default WeatherPage;
