const WeatherExtraInfo = ({ icon, name, description }) => {
  return (
    <div className="extra-info__item">
      {icon ? icon : null}
      <p>{name}</p>
      <strong>{description}</strong>
    </div>
  );
};

export default WeatherExtraInfo;
