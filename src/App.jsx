import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import WeatherInfo from './components/WeatherInfo/WeatherInfo.jsx';
import Loader from './components/Loader/Loader.jsx';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDay, setIsDay] = useState(false);

  useEffect(() => {
    if (weatherData.isDay === undefined) return;
    setIsDay(weatherData.isDay === 1 ? true : false);
  }, [weatherData]);

  return (
    <div className="app__container">
      <div className="app__content">
        <header>
          <SearchBar
            setWeatherData={setWeatherData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isDay={isDay}
          />
        </header>

        <main>
          <WeatherInfo weatherData={weatherData} setIsDay={setIsDay} />
        </main>

        {isLoading && <Loader isDay={isDay} />}

        <footer>
          <div className={isDay ? 'footer__container' : 'dt-footer__container'}>
            <p>
              Powered by{' '}
              <a href="https://www.weatherapi.com/" title="Free Weather API">
                WeatherAPI.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
