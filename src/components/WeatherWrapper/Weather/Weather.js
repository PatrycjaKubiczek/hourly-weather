import React, { Component } from "react";

import {
	Navigation,
	Scrollbar,
	Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Weather.scss";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import Temperature from "./Temperature/Temperature";
import Precipitation from "./Precipitation/Precipitation";
import Pressure from "./Pressure/Pressure";
import WindBearing from "./WindBearing/WindBearing";
import WindSpeed from "./WindSpeed/WindSpeed";
import Weekday from "./Weekday/Weekday";
class Weather extends Component {
	render() {
		const { data } = this.props;

		const temps = this.props.data.map(({ temp }) => {
			let tempRound = Math.round(temp);
			return { name: "temperatura", temp: tempRound };
		});

		const precips = this.props.data.map(({ pop }) => {
			return { name: "opad", precipIntensity: pop };
		});

		const pressureRow = this.props.data.map(({ pressure }) => {
			let pressRound = Math.round(pressure);
			return { name: "temperatura", pressure: pressRound };
		});

		return (
			<Swiper
				className="swiper-container"
				modules={[Scrollbar, Navigation, Mousewheel]}
				slidesPerView={"auto"}
				mousewheel={true}
				navigation={true}
				scrollbar={true}
				direction={"horizontal"}
			>
				{data.map((hour, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="col" key={index} id={index}>
								<div className="item item--day">
									<Weekday day={hour.dt} />
								</div>

								<div className="item item--hour">
									<p>
										{new Date(hour.dt * 1000).getHours() + ":00"}
									</p>
								</div>

								<div className="item item--icon">
									<WeatherIcon icon={hour.weather[0].main} />
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
									<WindBearing
										data={hour.windBearing}
									></WindBearing>
								</div>

								<div className="item item--windspeed">
									<WindSpeed
										data={hour.wind_speed}
									></WindSpeed>
								</div>

								<div className="item item--pressure">
									{index === 0 ? (
										<Pressure data={pressureRow}></Pressure>
									) : (
										<div className="empty-slot"></div>
									)}
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				{/* <div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div> */}
			</Swiper>
		);
	}
}
export default Weather;
