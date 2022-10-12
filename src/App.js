import axios from "axios";
import { useState } from "react";

const App = () => {
  const [weather, setWeather] = useState(null);
  // const defWeather = ["london" , "Paris" , "New York"];

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_KEY_WAEATHER}&q=London&aqi=yes`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error.massage);
    }
  };

  getWeather();

  return (
    <div className="App">
      <div>Weather App</div>
      <input placeholder="Search ..."></input>
      <div className="def-result">
        {weather && (
          <div>
            <h1>{weather.location.name}</h1>
            <h1>{weather.location.localtime}</h1>
            <h1>{weather.location.country}</h1>
            <h1>{weather.current.feelslike_c}</h1>
            <h1>{weather.current.feelslike_f}</h1>
            <img src={weather.current.condition.icon} alt="weather-icon"></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
