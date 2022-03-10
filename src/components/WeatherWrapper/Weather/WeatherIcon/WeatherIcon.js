import React, { Component } from "react";
import "./WeatherIcon.scss"

class WeatherIcon extends Component {
  renderIcons = (propsIcon) => {
    let icon = propsIcon;

    switch (icon) {
      case "Clear":
        return 'day-sunny';

      case "Rain":
        return 'rain';

      case "Snow":
        return 'snow';

      case "Wind":
        return 'windy';

      case "Fog":
        return 'fog';

      case "Clouds":
        return 'cloud';

      default:
        // console.log("icon");
    }
  };

  render() {
    return (
      <div className="weather__icon">
        <i className={`wi wi-${this.renderIcons(this.props.icon)}`}></i>
      </div>
    );
  }
}
export default WeatherIcon;
