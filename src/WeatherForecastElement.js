import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastElement(props) {
  function manageDay() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }

  function maxTemp() {
    let temp = props.data.temp.max;
    return Math.round(temp);
  }

  function minTemp() {
    let temp = props.data.temp.min;
    return Math.round(temp);
  }

  return (
    <div className="WeatherForecast ">
      <div className="text-center">
        <h2>{manageDay()}</h2>
        <WeatherIcon iconInfo={props.data.weather[0].icon} size={48} />

        <h3>
          {maxTemp()}°C <span className="min-temp">{minTemp()}°C</span>
        </h3>
      </div>
    </div>
  );
}
