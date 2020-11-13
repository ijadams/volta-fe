import React, { useState } from "react";
import ReactVivus from 'react-vivus';

const HeroComponent = ({ data }) => {
  const [loaded, setLoadedState] = useState(false);
  const [videoLoaded, setVideoLoadedState] = useState(false);

  const handleVivusCallback = () => {
    setTimeout(() => {
      setLoadedState(true);
    }, 300);
  }; 

  const handleVideoCallback = () => {
    console.log('here');
    setTimeout(() => {
      setVideoLoadedState(true);
    }, 300);
  }; 
  
  return (
    <div>
        <div id="hero--container" className={`${videoLoaded ? "video-loaded" : ""}`}>
          <ReactVivus
             className={`vivus ${loaded ? "active" : ""}`}
             id="hero--vivus"
             option={{
               file: 'https://ijadams.s3.amazonaws.com/volta/volta-black-outline-orange.svg',
               type: 'oneByOne',
               animTimingFunction: 'EASE',
               duration: 175,
             }}
             callback={handleVivusCallback}
           />           
            <video src="https://ijadams.s3.amazonaws.com/volta/crooked-coast-5-s.mp4" onPlaying={handleVideoCallback} loop muted autoPlay></video> 
        </div>   
    </div>
  );
};

export default HeroComponent;
