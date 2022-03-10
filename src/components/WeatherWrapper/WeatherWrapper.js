import React, { Component } from "react";

import Weather from "./Weather/Weather";
import styles from './WeatherWrapper.module.scss'


// const LONDON_COORDS = '51.509865,-0.118092' // LONDON, UK
// const CRACOW_COORDS = "50.064651,19.944981"; // CRACOW
// const COPENHAGEN_CORDS = "55.676098,12.568337";
const CRACOW_LON = "50.064651";
const CRACOW_LAT = "19.944981";

const API = `
https://api.openweathermap.org/data/2.5/onecall?lat=${CRACOW_LAT}&lon=${CRACOW_LON}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pl`;
  // "?lang=pl&units=ca";


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
        this.setState({
          hourlyWeather: data.hourly,
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
          <p>Błąd! :(</p>
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
