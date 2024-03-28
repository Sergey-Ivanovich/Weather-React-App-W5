import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastElement from "./WeatherForecastElement";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  const apiKey = `2513f3c728b1b5ff4f4347e1a6af22b8`;
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  function Search() {
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <hr />
        <div className="row">
          <div className="col">
            <WeatherForecastElement data={forecastData} dayNumber={1} />
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return <div className="buffering">Loading...</div>;
  }
}
