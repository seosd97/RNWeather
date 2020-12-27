import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

const DailyForecastItem = ({weather}) => {
  return (
    <View>
      <Text>{moment.unix(weather.dt).format('MMM')}</Text>
    </View>
  );
};

export default DailyForecastItem;
