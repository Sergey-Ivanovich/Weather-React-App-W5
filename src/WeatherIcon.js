import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const weatherMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-couds-day": "PARTLY_CLOUDLY_DAY",
    "few-clouds-night": "PARTLY_CLOUDLY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        icon={weatherMapping[props.iconInfo]}
        color="black"
        size={64}
        animate={true}
      />
    </div>
  );
}
