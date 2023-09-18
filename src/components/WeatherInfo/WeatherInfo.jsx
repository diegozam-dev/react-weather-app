import WeatherExtraInfo from './WeatherExtraInfo/WeatherExtraInfo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  MdPlace,
  MdAir,
  MdDeviceThermostat,
  MdOutlineOpacity,
  MdGpsFixed,
} from 'react-icons/md';

const WeatherInfo = ({ weatherData }) => {
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

        <section className="weather-info__info">
          <div className="weather-info__icon">
            <img
              className="icon__img"
              src={weatherData.icon}
              alt="weather-icon"
            />
            <p className="icon__desciption">{data.condition}</p>
          </div>

          <div className="weather-info__temp">
            <MdDeviceThermostat />
            <p className="temp__celsius">
              {data.temp} <sup>o</sup> C
            </p>
          </div>

          <div className="weather-info__extra-info">
            <WeatherExtraInfo
              icon={<MdAir />}
              name="Wind Speed (k/h)"
              description={data.windKph}
            />

            <WeatherExtraInfo
              icon={<MdOutlineOpacity />}
              name="Humidity (%)"
              description={data.humidity}
            />

            <WeatherExtraInfo
              icon={<MdGpsFixed />}
              name="Coordinates (Lat, Lon)"
              description={data.coordinates}
            />
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      {Object.keys(weatherData).length !== 0 ? (
        <article className="weather-info__container">
          {weatherData.code !== 200
            ? handleError(weatherData)
            : handleData(weatherData)}
        </article>
      ) : null}
    </>
  );
};

export default WeatherInfo;
