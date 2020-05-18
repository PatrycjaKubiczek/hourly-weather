import React, { Component } from "react";
import Swiper from "react-id-swiper";


import './Weather.scss'
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import Temperature from "./Temperature/Temperature";
import Precipitation from "./Precipitation/Precipitation";
import Pressure from "./Pressure/Pressure";
import WindBearing from "./WindBearing/WindBearing";
import WindSpeed from "./WindSpeed/WindSpeed";
class Weather extends Component {
  render() {
    const { data } = this.props;

    const temps = this.props.data.map(({ temperature }) => {
      let tempRound = Math.round(temperature);
      return { name: "temperatura", temp: tempRound };
    });

    const precips = this.props.data.map(({ precipIntensity }) => {
      let precipFixed = parseFloat(precipIntensity.toFixed(1));
      return { name: "opad", precipIntensity: precipFixed };
    });

    const pressureRow = this.props.data.map(({ pressure }) => {
       let pressRound = Math.round(pressure);
      return { name: "temperatura", pressure: pressRound };
    });

    const days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", ];
    const params = {
      slidesPerView: "auto",
      navigation: {
        prevEl: ".arrow.swiper-button-prev",
        nextEl: ".arrow.swiper-button-next",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      mousewheel: {
        invert: true,
      },
      renderPrevButton: () => (
        <button className="arrow swiper-button-prev">
          <div className="triangle_left"></div>
        </button>
      ),
      renderNextButton: () => (
        <button className="arrow swiper-button-next">
          <div className="triangle_right"></div>
        </button>
      ),
    };
    return (
      <Swiper {...params} style={{ width: "400px", height: "400px" }}>
        {data.map((hour, index) => {
          return (
            <div className="col" key={index} id={index}>
              <svg height="100" width="100">
                <polygon points="250,60 100,400 400,400" class="triangle" />
                Sorry, your browser does not support inline SVG.
              </svg>
              <div className="item item--day">
                {days[new Date(hour.time * 1000).getDay()]}
              </div>

              <div className="item item--hour">
                <p>{new Date(hour.time * 1000).getHours() + ":00"}</p>
              </div>

              <div className="item item--icon">
                <WeatherIcon icon={hour.icon} />
              </div>

              {index === 0 ? (
                <div className="item">
                  <Temperature data={temps}></Temperature>
                </div>
              ) : (
                <div className="item empty-slot"></div>
              )}

              <div className="item">
                {index === 0 ? (
                  <Precipitation data={precips} />
                ) : (
                  <div className="empty-slot"></div>
                )}
              </div>
              <div className="item item--wind">
                <WindBearing data={hour.windBearing}></WindBearing>
              </div>
              <div className="item item--windspeed">
                <WindSpeed data={hour.windSpeed}></WindSpeed>
                {/* <p>
                  Słaby <br />
                  
                  {Math.round(hour.windSpeed)} km/h
                </p> */}
              </div>
              <div className="item item--pressure">
                {index === 0 ? (
                  <Pressure data={pressureRow}></Pressure>
                ) : (
                  <div className="empty-slot"></div>
                )}
              </div>
            </div>
          );
        })}
        <div className="swiper-scrollbar"></div>
      </Swiper>
    );
  }
}
export default Weather;
