/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import countries from 'i18n-iso-countries';
import WeatherPage from './pages/weather';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // TODO : Save Redux store later and set according to lang from Redux store
  useEffect(() => {
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    console.log('app effect1');
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        backgroundColor="transparent"
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
    backgroundColor: Colors.white,
    flex: 1,
  },
});

export default App;
