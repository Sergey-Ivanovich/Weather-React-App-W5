import "./App.css";
import Weather from "./Weather.js";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="brasov" />

      <footer>
        <p>
          This Project Was Coded By{" "}
          <a
            href="https://github.com/Sergey-Ivanovich"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Eric Noata
          </a>{" "}
          And is Open-Sourced on{" "}
          <a
            href="https://github.com/Sergey-Ivanovich/Weather-React-App-W5"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
