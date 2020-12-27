import Axios from 'axios';
import config from 'react-native-config';

export const getCurrentWeatherByName = async (cityName, units = 'metric') => {
  try {
    const res = await Axios.get(
      `${config.API_ENDPOINT}weather?q=${cityName}&units=${units}&appid=${config.API_KEY}`,
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDailyForecastWeatherByName = async (cityName) => {
  try {
    const res = await Axios.get(
      `${config.API_ENDPOINT}forecast/daily?q=${cityName}&cnt=5&appid=${config.API_KEY}`,
    );

    return res.data;
  } catch (err) {
    console.log(JSON.stringify(err));
  }
};

export const getWeatherData = async (
  lat,
  lon,
  exclude = [],
  units = 'metric',
  lang = 'en',
) => {
  try {
    const res = await Axios.get(
      `${config.API_ENDPOINT}onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&lang=${lang}&appid=${config.API_KEY}`,
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
