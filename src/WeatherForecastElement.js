import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastElement(props) {
  let specificDayData = props.data[props.dayNumber];

  console.log(specificDayData);

  function manageDay() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(specificDayData.dt * 1000);
    let day = date.getDay();
    return days[day];
  }

  function maxTemp() {
    let temp = specificDayData.temp.max;
    return Math.round(temp);
  }

  function minTemp() {
    let temp = specificDayData.temp.min;
    return Math.round(temp);
  }

  return (
    <div className="WeatherForecast ">
      <div className="text-center">
        <h2>{manageDay()}</h2>
        <WeatherIcon
          iconInfo={props.data[props.dayNumber].weather[0].icon}
          size={48}
        />

        <h3>
          {maxTemp()}°C <span className="min-temp">{minTemp()}°C</span>
        </h3>
      </div>
    </div>
  );
}
