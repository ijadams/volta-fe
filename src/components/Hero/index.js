import React, { useState } from "react";
import ReactVivus from "react-vivus";

const HeroComponent = ({ data }) => {
  const [loaded, setLoadedState] = useState(false);
  const [videoLoaded, setVideoLoadedState] = useState(false);

  const handleVivusCallback = () => {
    setTimeout(() => {
      setLoadedState(true);
    }, 300);
  };

  const handleVideoCallback = () => {
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
            file: "https://res.cloudinary.com/drnfburmr/image/upload/v1606755433/volta-black-outline-orange_dquuyz.svg",
            type: "oneByOne",
            animTimingFunction: "EASE",
            duration: 100
          }}
          callback={handleVivusCallback}
        />
        <video className="desktop" src="https://res.cloudinary.com/drnfburmr/video/upload/v1607013473/Crooked_Coast_HD_10sec_y9xjrr.mp4"
               onPlaying={handleVideoCallback} loop muted autoPlay></video>
        <video className="mobile"
               src="https://res.cloudinary.com/drnfburmr/video/upload/v1606412005/Crooked_Coast_HD_MOBILE_CLIP_scnwaw.mp4"
               onPlaying={handleVideoCallback} loop muted autoPlay></video>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
