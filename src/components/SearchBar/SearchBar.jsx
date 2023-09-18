import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { getWeatherData } from '../../services/weatherApi.js';

const SearchBar = ({ setWeatherData, isLoading, setIsLoading }) => {
  const [location, setLocation] = useState('');

  const handleChange = (e) => {
    const tmpLocation = e.target.value;

    setLocation(tmpLocation.trimStart());
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (location === '') return;

    setIsLoading(true);
    const data = await getWeatherData(location);
    setIsLoading(false);

    setWeatherData(data);
  };

  return (
    <div className="search-bar__container">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Enter some place..."
        value={location}
        disabled={isLoading}
        onChange={handleChange}
      />
      <button
        className="search-bar__button"
        disabled={isLoading}
        onClick={handleClick}
      >
        <MdSearch />
      </button>
    </div>
  );
};

export default SearchBar;
