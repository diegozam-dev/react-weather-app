import WeatherInfoItem from './WeatherInfoItem/WeatherInfoItem.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import {
  MdPlace,
  MdAir,
  MdDeviceThermostat,
  MdOutlineOpacity,
  MdGpsFixed,
} from 'react-icons/md';

const WeatherInfo = ({ weatherData, setIsDay }) => {
  const handleError = (error) => {
    return <ErrorMessage error={error} />;
  };

  const handleData = (data) => {
    return (
      <>
        <header className="weather-info__location">
          <div className="location">
            <MdPlace />
            <p>
              {data.name}, {data.country}
            </p>
          </div>
        </header>

        <main className="weather-info__condition">
          <div className="condition">
            <img
              className="condition__img"
              src={weatherData.icon}
              alt="weather-icon"
            />
            <p className="condition__desciption">{data.condition}</p>
          </div>

          <div className="temp">
            <MdDeviceThermostat />
            <p className="temp__celsius">
              {data.temp} <sup>o</sup> C
            </p>
          </div>

          <div className="weather-info__item">
            <WeatherInfoItem
              icon={<MdAir />}
              name="Wind Speed (k/h)"
              description={data.windKph}
            />

            <WeatherInfoItem
              icon={<MdOutlineOpacity />}
              name="Humidity (%)"
              description={data.humidity}
            />

            <WeatherInfoItem
              icon={<MdGpsFixed />}
              name="Coordinates (Lat, Lon)"
              description={data.coordinates}
            />
          </div>
        </main>
      </>
    );
  };

  return (
    <section className="weather-info__container">
      {Object.keys(weatherData).length !== 0
        ? weatherData.code !== 200
          ? handleError(weatherData)
          : handleData(weatherData)
        : null}
    </section>
  );
};

export default WeatherInfo;
