import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastElement(props) {
  return (
    <div className="WeatherForecast ">
      <div className="text-center">
        <h2>Thu</h2>
        <WeatherIcon
          iconInfo={props.data[props.dayNumber].weather[0].icon}
          size={48}
        />

        <h3>
          20°C <span className="min-temp">15°C</span>
        </h3>
      </div>
    </div>
  );
}
