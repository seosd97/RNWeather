import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import {getDailyForecastWeatherByName} from '../../modules/weather-api';
import DailyForecastItem from './dailyForecastItem';

const DailyForecastList = ({city}) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (forecastData == null) {
      getDailyForecastWeatherByName(city).then((res) => {
        console.log(res);
        setForecastData(res);
      });
    }
  }, [city, forecastData]);

  return (
    <ScrollView>
      {forecastData &&
        forecastData.map((w, i) => {
          return (
            <DailyForecastItem key={`DailyForecastItem_${i}`} weather={w} />
          );
        })}
    </ScrollView>
  );
};

DailyForecastList.propTypes = {
  city: PropTypes.string,
};

export default DailyForecastList;
