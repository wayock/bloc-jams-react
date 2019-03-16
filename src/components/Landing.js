import React from 'react';

const Landing = () => (
  <section className="landing">
    <img className="earbuds" src="/assets/images/earbudsandcoffee.jpg" alt="Earbuds with coffee cup" width="500" height="500" />
    <h1 className="hero-title">Turn the music up!</h1>
    <section className="selling-point">
      <div className="flex-container">
        <div className="row">
          <div className="col-sm">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
          </div>
          <div className="col-sm">
            <h2 className="point-title">Unlimited, streaming, ad-free</h2>
            <p className="point-description">No arbitrary limits. No distractions.</p>
          </div>
          <div className="col-sm">
            <h2 className="point-title">Mobile enabled</h2>
            <p className="point-description">Listen to your music on the go.</p>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
