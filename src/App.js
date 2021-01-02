/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import countries from 'i18n-iso-countries';
import WeatherPage from './pages/weather';

const App = () => {
  // TODO : Save Redux store later and set according to lang from Redux store
  useEffect(() => {
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        backgroundColor="#e3e3e3"
      />
      <SafeAreaView style={styles.body}>
        {/* {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )} */}
        <WeatherPage />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#e3e3e3',
    flex: 1,
  },
});

export default App;
