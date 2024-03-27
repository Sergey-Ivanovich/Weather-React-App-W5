import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = `2513f3c728b1b5ff4f4347e1a6af22b8`;
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response);
  }

  axios.get(apiUrl).then(handleResponse);

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
