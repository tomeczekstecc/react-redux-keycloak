import React from 'react';
import { Link } from 'react-router-dom';
import { GrUserSettings, GrShop } from 'react-icons/gr';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home-container'>
        <h1 className='title'>Allegro 2</h1>
        <div className='cards'>
          <Link to='/shop'>
            <div className='card'>
              <GrShop className='icon-card' />
              <div className='photo'></div>
            </div>
          </Link>

          <Link to='/user'>
            <div className='card'>
              <GrUserSettings className='icon-card' />
              <div className='photo'></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
