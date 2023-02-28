import React from 'react';
import vg from '../assets/vector.webp';
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1>NiBytes</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </main>
      </div>

      <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            sunt natus accusamus consectetur iusto repellendus omnis suscipit
            quod corporis accusantium?
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus necessitatibus aspernatur, cumque recusandae quos corrupti placeat, possimus ab itaque beatae a fuga eaque quibusdam officia quasi nobis natus veniam libero non veritatis eligendi? Cupiditate libero non suscipit et ratione, omnis distinctio odio vitae esse dicta, adipisci quam? Praesentium, minus deserunt.
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s"}} >
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}} >
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}} >
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{animationDelay:"1s"}} >
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
