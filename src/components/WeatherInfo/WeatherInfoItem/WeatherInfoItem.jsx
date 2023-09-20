const WeatherInfoItem = ({ icon, name, description }) => {
  return (
    <div className="item">
      {icon}
      <p>{name}</p>
      <strong>{description}</strong>
    </div>
  );
};

export default WeatherInfoItem;
