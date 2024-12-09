import React, { useState } from 'react';
interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const Weather = () => {
  const [weather, setWeatherData] = useState<WeatherData>();
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = '81c30a6aab29279cc3eba85e125764f0';

  //fetch API
  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
      setError('');
    } catch (error) {
      setError((error as any).message);
      setLoading(true);
      console.error(error);
    }
  };

  //handle input
  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCity(e.target.value);
  };

  //hanlde button
  const handleButtonClick = () => {
    fetchApi();
    setCity('');
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="where is the weather"
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
