import React, { Component } from "react";

import Weather from "./Weather/Weather";
import styles from './WeatherWrapper.module.scss'


// const LONDON_COORDS = '51.509865,-0.118092' // LONDON, UK
// const CRACOW_COORDS = "50.064651,19.944981"; // CRACOW
// const COPENHAGEN_CORDS = "55.676098,12.568337";
const CRACOW_LON = "50.064651";
const CRACOW_LAT = "19.944981";
const API_KEY = "bca2ebc0b3f8f46fe1b2883c0aafcdf5"

const API = `https://api.openweathermap.org/data/2.5/forecast/daily?lat={${CRACOW_LAT}}&lon={${CRACOW_LON}}&cnt={16}&appid={${API_KEY}}&lang={lang}`;
  // "?lang=pl&units=ca";

  console.log(API)


class WeatherWrapper extends Component {
  state = {
    hourlyWeather: null,
    isLoading: true,
    err: null
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          hourlyWeather: data.hourly.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("error:" + err);
        this.setState({ 
          isLoading: false, 
          err: err });
      });
  }
  render() {
    const { hourlyWeather, isLoading, err } = this.state;

    if (isLoading) {
      return (
        <div className={styles.loader}>
          <p>Ładowanie danych...</p>
          <div className={styles.loaderDualRing}></div>
        </div>
      );
    }
    if (err) {
      return (
        <div className={styles.loader}>
          <p>Błąd! :( Spróbuj odświeżyć stronę.</p>
        </div>
      );
    }
    return (
        <div className={styles.weather__main}>
          <Weather data={hourlyWeather}></Weather>
        </div>
    );
  }
}

export default WeatherWrapper;
