import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

const FlowerCard = ({flower}) => {
  return <div className={`flower-card-container ${flower.favorite ? 'active' : ''}`}>
    <img src={flower.profile_picture} alt="flower"/>
    <div className="gradient"/>
    <button className="favorite"><FontAwesomeIcon icon={faStar} /></button>
    <div className="text">
      <h5>{flower.name}</h5>
      <p>{flower.latin_name}</p>
      <button className="sightings">{flower.sightings === 1 ? "1 sighting" : `${flower.sightings} sightings`}</button>
    </div>
  </div>;
}

export default FlowerCard;