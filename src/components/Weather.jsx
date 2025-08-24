import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/theme/ThemeContext";
import WeatherContext from "../context/theme/Weather/WeatherContext";
import { fetchWeather } from "../context/theme/Weather/weatherServices";

const Weather = () => {
  const [city, setCity] = useState("");
  const { theme } = useContext(ThemeContext);
  const { weatherData, dispatch } = useContext(WeatherContext);

  const getWeather = async (cityName) => {
    if (!cityName) return; // don't call API if city is empty
    const data = await fetchWeather(cityName);
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return; // ignore empty search
    getWeather(city);
    setCity("");
  };

  // load default city when component mounts
  useEffect(() => {
    getWeather("indore");
  }, []);

  // show loading state
  if (!weatherData || !weatherData.current) {
    return (
      <div
        className={
          theme
            ? "border border-gray-300 text-gray-600 p-4 rounded-md shadow-xl"
            : "border border-gray-800 text-gray-600 p-4 rounded-md shadow-xl"
        }
      >
        <h3 className="text-xl text-gray-600 mb-3 font-bold py-2">
          Weather Loading...
        </h3>
      </div>
    );
  }

  return (
    <div
      className={
        theme
          ? "border border-gray-300 text-gray-600 p-4 rounded-md shadow-xl"
          : "border border-gray-800 text-gray-600 p-4 rounded-md shadow-xl"
      }
    >
      <h3 className="text-xl text-gray-600 mb-3 font-bold py-2">
        Today's weather
      </h3>

      <div className="flex item-center justify-between">
        <div>
          <h1 className="text-4xl text-gray-600 my-3 font-bold py-2">
            {weatherData?.current.temp_c}°C
          </h1>
          <h2 className="text-xl text-gray-600 font-bold py-2">
            {weatherData?.location.name}
          </h2>
        </div>
        <div>
          <img
            className="h-20 mb-4"
            src={weatherData?.current.condition.icon}
            alt="icon"
          />
          <p className="text-gray-500 text-xl text-center font-bold">
            {weatherData?.current.condition.text}
          </p>
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className="mt-2">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="p-4 border border-gray-300 w-full rounded-md"
          placeholder="Enter City Name"
        />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white text-md w-full mt-2 rounded-sm font-semibold"
        >
          Search Weather
        </button>
      </form>
    </div>
  );
};

export default Weather;
