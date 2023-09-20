import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { getWeatherData } from '../../services/weatherApi.js';
import './SearchBar.css';

const SearchBar = ({ setWeatherData, isLoading, setIsLoading }) => {
  const [location, setLocation] = useState('');

  const handleLocation = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation.trimStart());
  };

  const handleLocationSearch = async (e) => {
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
        onChange={handleLocation}
      />
      <button
        className="search-bar__button"
        disabled={isLoading}
        onClick={handleLocationSearch}
      >
        <MdSearch size="1.2rem" />
      </button>
    </div>
  );
};

export default SearchBar;
