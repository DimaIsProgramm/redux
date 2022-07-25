import React from 'react';
import { connect } from 'react-redux';

import { cityDataSelector } from './weather.selector';
import { getWeatherData } from './weather.actions';

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.weatherData.map(city => (
            <li key={city.id} {...city} className="city">
              <span className="city__name">{city.name}</span>
              <span className="city__temperature">{city.temperature}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapDispatch = {
  getWeatherData,
};
const mapState = state => {
  return {
    weatherData: cityDataSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Weather);
