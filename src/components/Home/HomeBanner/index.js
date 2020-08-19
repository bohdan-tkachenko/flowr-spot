import React from 'react';
import './index.scss';
import SearchInput from '../../controls/SearchInput';

const HomeBanner = () => {
  return <div className="home-banner-container">
    <div className="center-section">
      <h1>Discover flowers around you</h1>
      <h2>Explore between more than 8.427 sightings</h2>
      <SearchInput placeholder="Looking for something specific?"/>
    </div>
  </div>;
}

export default HomeBanner;