import React from "react";

export default function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = props.date;
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let min = date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  return (
    <div>
      {days[dayNumber]} {hour}:{min}
    </div>
  );
}
