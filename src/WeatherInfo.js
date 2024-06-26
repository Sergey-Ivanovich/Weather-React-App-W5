import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo main-body p-5">
      <p className="country">{props.data.country}</p>
      <h1 className="city">{props.data.cityName}</h1>
      <ul className="p-0 mb-5">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-8 master-temp">
          <WeatherIcon iconInfo={props.data.icon} size={64} />
          <h2 className="d-inline">
            <WeatherUnit celsius={props.data.temperature} />
          </h2>
        </div>
        <div className="col-4 ">
          <ul>
            <li>Pressure: {props.data.pressure} hPa</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} M/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
