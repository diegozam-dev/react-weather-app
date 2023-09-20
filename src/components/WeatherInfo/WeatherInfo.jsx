import {
  MdPlace,
  MdAir,
  MdDeviceThermostat,
  MdOutlineOpacity,
  MdGpsFixed,
} from 'react-icons/md';
import './WeatherInfo.css';

const WeatherInfo = ({ weatherData, isDay }) => {
  const handleError = (error) => {
    return (
      <h2 className={isDay ? 'error__message' : 'error__message dt-txt'}>
        {error.message}
      </h2>
    );
  };

  const handleData = (data) => {
    return (
      <>
        <header className="weather-info__location">
          <div className="location">
            <MdPlace size="1.5rem" color="#FE0000" />
            <h2 className={isDay ? 'location__name' : 'location__name dt-txt'}>
              {data.name}, {data.country}
            </h2>
          </div>
        </header>

        <main className="weather-info__condition">
          <div className="condition">
            <p
              className={
                isDay ? 'condition__desciption' : 'condition__desciption dt-txt'
              }
            >
              {data.condition}
            </p>
            <div className="condition__img">
              <img src={weatherData.icon} alt="weather-icon" />
            </div>
          </div>

          <div className="temp">
            <MdDeviceThermostat
              size="3rem"
              className={isDay ? null : 'dt-txt'}
            />
            <p className={isDay ? 'temp__celsius' : 'temp__celsius dt-txt'}>
              {data.temp} <sup>o</sup> C
            </p>
          </div>

          <div className="weather-info__item">
            <div className="item">
              <MdAir size="1.5rem" className={isDay ? null : 'dt-txt'} />
              <p className={isDay ? '' : 'dt-txt'}>Wind Speed (k/h)</p>
              <strong className={isDay ? '' : 'dt-txt'}>{data.windKph}</strong>
            </div>

            <div className="item">
              <MdOutlineOpacity
                size="1.5rem"
                className={isDay ? null : 'dt-txt'}
              />
              <p className={isDay ? '' : 'dt-txt'}>Humidity (%)</p>
              <strong className={isDay ? '' : 'dt-txt'}>{data.humidity}</strong>
            </div>

            <div className="item">
              <MdGpsFixed size="1.5rem" className={isDay ? null : 'dt-txt'} />
              <p className={isDay ? '' : 'dt-txt'}>Coordinates (Lat, Lon)</p>
              <strong className={isDay ? '' : 'dt-txt'}>
                {data.coordinates}
              </strong>
            </div>
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
