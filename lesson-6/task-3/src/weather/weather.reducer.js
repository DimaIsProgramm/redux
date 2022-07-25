import { WEATHER_DATA_RECIEVED } from './weather.actions';
const initialData = {
  weatherData: [],
};
const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECIEVED:
      return {
        ...state,
        weatherData: action.weatherData,
      };
    default:
      return state;
  }
};
export default weatherReducer;
