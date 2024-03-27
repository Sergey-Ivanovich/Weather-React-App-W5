import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function App(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;

  function handleResponse(response) {
    setWeatherData({
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      cityName: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
    });
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready === true) {
    return (
      <div className="App">
        <main className="border border-gray p-1 rounded ">
          <form onSubmit={handleSubmit}>
            <div className="row ">
              <div className="col-9 ">
                {" "}
                <input
                  onChange={handleChange}
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
          <WeatherInfo data={weatherData} />
        </main>
      </div>
    );
  } else {
    search();
    return <h1 className="buffering">Loading...</h1>;
  }
}
