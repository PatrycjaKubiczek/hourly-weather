import React, { Component } from "react";
import "./WeatherIcon.scss"

class WeatherIcon extends Component {
  renderIcons = (propsIcon) => {
    let icon = propsIcon;

    switch (icon) {
      case "clear-day":
        return 'day-sunny';

      case "clear-night":
        return 'night-clear';

      case "rain":
        return 'rain';

      case "snow":
        return 'snow';

      case "sleet":
        return 'sleet';

      case "wind":
        return 'windy';

      case "fog":
        return 'fog';

      case "cloudy":
        return 'cloud';

      case "partly-cloudy-day":
        return 'day-cloudy';

      case "partly-cloudy-night":
        return 'night-cloudy';

      default:
        console.log("icon");
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
