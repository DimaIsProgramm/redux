import { getData } from './weather.gateway';

export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

export const cityDataRecieved = weatherData => {
  return {
    type: 'WEATHER_DATA_RECIEVED',
    weatherData,
  };
};

export const getWeatherData = () => dispatch =>
  getData().then(cityData => dispatch(cityDataRecieved(cityData)));
