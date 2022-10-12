import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async (data) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_KEY_WAEATHER}&q=${data}&aqi=yes`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error.massage);
    }
  };

  useEffect(() => {
    getWeather("Dallas");
  }, []);

  const triggerButton = (data) => {
    getWeather(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        placeholder="Search City..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      ></input>
      <button
        onClick={() => {
          triggerButton(input);
        }}
      >
        Search
      </button>
      <div className="search">
        {weather && (
          <div>
            <img src={weather.current.condition.icon} alt="weather-icon"></img>
            <h3> City: {weather.location.name}</h3>
            <h3> Country: {weather.location.country}</h3>

            <h3>Local Time: {weather.location.localtime}</h3>
            <h3>Temperature: {weather.current.feelslike_c}F°</h3>
            <h3>Temperature: {weather.current.feelslike_f}C°</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
