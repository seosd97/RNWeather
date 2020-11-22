import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getCurrentWeatherByName} from '../modules/weather-api';

const WeatherPage = () => {
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (currentWeather == null) {
      getCurrentWeatherByName('Seoul').then((res) => {
        setCurrentWeather(res);
        // setLoading(false);
      });
    }
  }, [currentWeather]);

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <Text>This is Weather Page.</Text>
      {currentWeather == null ? null : (
        <Text>{currentWeather.sys.country}</Text>
      )}
    </View>
  );
};

export default WeatherPage;
