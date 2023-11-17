import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">
            <h1>Sky Angels</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Sky Angels</h1>
          <p>Spreading our wings for a brighter tomorrow.</p>
          <button>Find Out More</button>
        </div>
      </section>

      <section className='gallery-section'>
        {/* <div className='gallery-content'>
          <h1>Gallery</h1>
          <img src='https://sky-angels-bucket.s3.amazonaws.com/images/skyangels01.JPG'></img>
        </div> */}
      </section>

      <footer className="fixed-footer">
      <div className="footer-content">
        <p>Sky Angels © 2023</p>
      </div>
    </footer>

    </div>
  );
};

export default App;
