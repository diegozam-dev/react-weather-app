import { MdSearch } from 'react-icons/md';

const SearchBar = () => {
  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" placeholder="Enter some place..." />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <MdSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
