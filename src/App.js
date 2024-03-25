import "./App.css";

export default function App() {
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
          <h1 className="city">Bucharest</h1>
          <ul className="p-0 mb-5">
            <li>Sunday 18:00</li>
            <li>Mostly Sunny</li>
          </ul>

          <div className="row">
            <div className="col-8 ">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="weather icon"
              ></img>
              <h2 className="d-inline">
                <span className="temperature">20</span>
                <span className="unit">°C</span>
              </h2>
            </div>
            <div className="col-4 ">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 38%</li>
                <li>Wind: 7 Mph</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This Project Was Coded By{" "}
          <a href="https://github.com/Sergey-Ivanovich"> Eric Noata</a> And is
          Open-Sourced on{" "}
          <a href="https://github.com/Sergey-Ivanovich/Weather-React-App-W5">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
