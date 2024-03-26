import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.iconInfo}.png`}
      />
    </div>
  );
}
