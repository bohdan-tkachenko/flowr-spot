import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

const SearchInput = ({placeholder}) => {
  return <div className="search-input-container">
    <input type="text" placeholder={placeholder}/>
    <FontAwesomeIcon icon={faSearch} />
  </div>;
}

export default SearchInput;