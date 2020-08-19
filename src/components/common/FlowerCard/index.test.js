import React from 'react';
import renderer from 'react-test-renderer';
import FlowerCard from '.';

it('renders correctly', () => {
  const tree = renderer
    .create(<FlowerCard flower={{
      favorite: false,
      id: 7,
      latin_name: "Daphne alpina",
      name: "Alpski volcin",
      profile_picture: "//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/007/medium/L_00010.jpg?1527514226",
      sightings: 0
    }}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});