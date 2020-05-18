import React, { Component } from "react";

import Weather from "./Weather/Weather";
import styles from './WeatherWrapper.module.scss'

const API =
  "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/944c9a45b3172504520c7e1bd197185f/50.064651,19.944981?lang=pl&units=ca";

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
