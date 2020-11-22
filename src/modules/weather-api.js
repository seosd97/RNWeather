import Axios from 'axios';
import config from 'react-native-config';

export const getCurrentWeatherByName = async (cityName) => {
  try {
    const res = await Axios.get(
      `${config.API_ENDPOINT}weather?q=${cityName}&appid=${config.API_KEY}`,
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
