import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img2 from '../assets/p1.png';
import img3 from '../assets/earth.jpg';
import img4 from '../assets/cypunk.jpg';

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img2} alt="item2" />
          <p className="legend">City</p>
        </div>
        <div>
          <img src={img3} alt="item3" />
          <p className="legend">Techno Earth</p>
        </div>
        <div>
          <img src={img4} alt="item4" />
          <p className="legend">Cyberpunk</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
