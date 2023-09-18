import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import WeatherInfo from './components/WeatherInfo/WeatherInfo.jsx';
import Loader from './components/Loader/Loader.jsx';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  console.log(import.meta.env.API_KEY);
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <div className="app__container">
      <div className="app__content">
        <header>
          <SearchBar
            setWeatherData={setWeatherData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </header>

        <main>
          <WeatherInfo weatherData={weatherData} />
        </main>
      </div>

      {isLoading && <Loader />}

      <footer>
        <p>
          Powered by{' '}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
