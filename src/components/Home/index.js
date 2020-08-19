import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import HomeBanner from './HomeBanner';
import FlowerList from '../common/FlowerList';
import { fetchFlowers } from '../../store/flowers/actions';
import './index.scss';

const Home = ({items}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  return <div className="home-page-container">
    <HomeBanner/>
    <FlowerList className="flower-list" items={items}/>
  </div>;
}

const mapStateToProps = (state) => ({
  items: state.flowers.items,
});

export default connect(mapStateToProps)(Home);