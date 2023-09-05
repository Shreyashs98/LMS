import React from 'react';
import './Home.css'; // Import custom styles for Home component
import videoSource from '../../assets/books.mp4'; // Import the video source
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Not supported the video
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1 style={{ fontWeight: 'bold', fontSize: '4rem', color: 'white' }}>Book Library</h1>
          <p style={{ fontWeight: 'bold', fontSize: '2rem', color: 'white' }}>Manage your Books</p>

          <button type='button' className='btn btn-outline-dark'>
            <Link to='/login' style={{ fontFamily: 'Arial, sans-serif', textDecoration: 'none' }}>Get started</Link>
          </button>

          {/* Add the "Download for Android" button */}
          <a
            href='https://github.com/Shreyashs98/LMS/blob/main/frontend/src/assets/App/bk_download.apk'
            className='btn btn-primary'
            style={{ fontFamily: 'Arial, sans-serif', textDecoration: 'none', marginLeft: '10px' }}
            download
          >
            Download for Android
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
