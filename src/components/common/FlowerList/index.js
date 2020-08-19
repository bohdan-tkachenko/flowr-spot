import React from 'react';
import FlowerCard from '../FlowerCard';
import './index.scss';

const FlowerList = ({items, className}) => {
  return <div className={`${className} flower-list-container`}>
    {items.map(item => <FlowerCard key={item.id} flower={item}/>)}
  </div>;
}

export default FlowerList;