import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="main-body p-5">
      <h1 className="city">{props.data.cityName}</h1>
      <ul className="p-0 mb-5">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-8 ">
          <img src={props.data.icon} alt="weather icon"></img>
          <h2 className="d-inline">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </h2>
        </div>
        <div className="col-4 ">
          <ul>
            <li>Pressure: {props.data.pressure} hPa</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} Mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
