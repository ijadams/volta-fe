/* eslint-disable */

import React from "react";
import TargetComponent from "../../TargetComponent";

const HomeSectionThree = () => {
  return (
    <div>
      <div id="home--section--three" className="home--section">

        <TargetComponent>
          <div className="text--container">
            <h1>Our Collaborators</h1>
          </div>
        </TargetComponent>

        <div className="grid-container">
          <div className="item--container">
            <TargetComponent>
              <img className="grid-img"
                   src="https://res.cloudinary.com/drnfburmr/image/upload/v1606505392/medium_Crooked_Coast_b3616fc863.jpg"
                   alt="band image a"/>
              <p>Crooked Coast</p>
            </TargetComponent>
          </div>
          <div className="item--container">
            <TargetComponent>
              <img className="grid-img"
                   src="https://res.cloudinary.com/drnfburmr/image/upload/v1606774572/test12312_t4k7ch.jpg"
                   alt="band image 2"/>
              <p>The Quins</p>
            </TargetComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
