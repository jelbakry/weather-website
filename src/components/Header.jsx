import { useState } from 'react';
import moment from 'moment';
import TempToggle from './TempToggle.jsx';

function Header({ unit, setUnit, onSearch , city, country }) {

    const [searchInput, setSearchInput] = useState('');
    const currentDate = moment().format("DD MMMM YYYY");

    const handleSearch = () => {
        if (!searchInput.trim()) return;
        onSearch(searchInput);
        setCity(searchInput);
        setSearchInput('');
    };

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };


    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSearch();
        }
    };

    return(
        <header className="header">

            <div className="left-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 loc-icon">
                    <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
                </svg>
                <p className="location">{city}, {country} ({currentDate})</p>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Search city" className="search-bar" value={searchInput} onChange={handleChange} onKeyDown={handleKeyDown}/>
                <button className="search-btn" onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 search-icon">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className="right-container">
                <TempToggle unit={unit} setUnit={setUnit} />
            </div>
        </header>
    );
}

export default Header