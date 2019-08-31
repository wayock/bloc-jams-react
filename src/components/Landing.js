import React from 'react';
import './Landing.css';

const Landing = () => (
  <section className="landing">
  <br/>
  <br/>
    <div className="flex-container">
      <div className="row">
        <div className="col-sm">
          <img className="earbuds" src="/assets/images/earbudsandcoffee.jpg" alt="Earbuds with coffee cup" width="400" height="400" />
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <h1 className="hero-title">Turn the music up!</h1>
    <br/>
    <br/>
    <section className="selling-point">
      <div className="flex-container">
        <div className="row">
          <div className="col-sm">
            <h2 className="point-title">Choose Your Music</h2>
              <div className="icons">
                <ion-icon name="headset"></ion-icon>
              </div>
            <p className="point-description">With plenty of music, why should you have to listen to songs that someone else chose?</p>
          </div>
          <div className="col-sm">
            <h2 className="point-title">Unlimited Streaming</h2>
              <div className="icons">
                <ion-icon name="wifi"></ion-icon>
              </div>
            <p className="point-description">No arbitrary limits. No distractions.</p>
          </div>
          <div className="col-sm">
            <h2 className="point-title">Mobile Enabled</h2>
              <div className="icons">
                <ion-icon name="phone-portrait"></ion-icon>
              </div>
            <p className="point-description">Listen to your music on the go.</p>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
