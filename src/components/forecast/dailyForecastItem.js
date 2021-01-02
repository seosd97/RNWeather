import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import moment, {normalizeUnits} from 'moment';
import * as TempUtils from '../../modules/temperature';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 2,
    alignItems: 'center',
  },
  icon: {
    width: normalize(40),
    height: normalize(40),
  },
  dayText: {
    flex: 0.5,
    textAlign: 'center',
  },
  tempText: {
    flex: 1,
    textAlign: 'center',
  },
});

const DailyForecastItem = ({weather}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dayText}>
        {moment.unix(weather.dt).format('MM/DD')}
      </Text>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
          }}
        />
      </View>
      <View style={styles.tempText}>
        <Text>
          {`${TempUtils.tempToString(
            Math.floor(weather.temp.max),
          )} / ${TempUtils.tempToString(Math.floor(weather.temp.min))}`}
        </Text>
      </View>
    </View>
  );
};

export default DailyForecastItem;
