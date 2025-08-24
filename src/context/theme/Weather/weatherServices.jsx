export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=92b856c82cb544dc9b6103654252008&q=${city}&aqi=yes`
  );


  const data = await response.json();
  return data;
};

