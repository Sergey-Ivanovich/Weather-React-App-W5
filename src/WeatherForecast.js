import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast ">
      <div className="text-center">
        <h2>Thu</h2>
        <WeatherIcon iconInfo="clear-sky-day" size={48} />

        <h3>
          20°C <span className="min-temp">15°C</span>
        </h3>
      </div>
    </div>
  );
}
