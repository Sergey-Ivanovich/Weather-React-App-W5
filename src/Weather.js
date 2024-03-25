import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  function handleResponse(response) {
    console.log(response);

    setWeatherData({
      date: new Date(response.data.time * 1000),
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      cityName: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
    });
  }

  if (weatherData.ready === true) {
    return (
      <div className="App">
        <main className="border border-gray p-1 rounded ">
          <form>
            <div className="row ">
              <div className="col-9 ">
                {" "}
                <input
                  type="search"
                  placeholder="e.g. Brasov"
                  className=" w-100 btn text-start city-box"
                />
              </div>
              <div className="col-3 ">
                {" "}
                <input type="submit" className="btn btn-primary   w-100 " />
              </div>
            </div>
          </form>
          <div className="main-body p-5">
            <h1 className="city">{weatherData.cityName}</h1>
            <ul className="p-0 mb-5">
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li>{weatherData.description}</li>
            </ul>

            <div className="row">
              <div className="col-8 ">
                <img src={weatherData.icon} alt="weather icon"></img>
                <h2 className="d-inline">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </h2>
              </div>
              <div className="col-4 ">
                <ul>
                  <li>Pressure: {weatherData.pressure} hPa</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} Mph</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
    return <h1 className="buffering">Loading...</h1>;
  }
}
