import React from 'react';
import { Link } from 'react-router-dom';
import { GrUserSettings, GrShop } from 'react-icons/gr';

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='title'>Allegro 2</h1>
      <div className='cards'>
        <div className='card'>
          <Link to='/shop'>
            <GrShop className='icon-card' />
          </Link>
          <div className='photo'></div>
        </div>

        <div className='card'>
          <Link to='/user'>
            <GrUserSettings className='icon-card' />
          </Link>
          <div className='photo'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
