import React from "react";

const HeroStillComponent = ({ data }) => {

  return (
    <div>
      <div id="hero--container">
        <div class="hero--still">
            <div>
                <img id="volta" alt="volta logo" src="https://res.cloudinary.com/ia-interactive/image/upload/v1617211512/urn_aaid_sc_US_7351386a-35ed-424b-a70e-62ca29f89123_1_igpop2.png"/>
                <img id="omni" alt="omni logo" src="https://res.cloudinary.com/ia-interactive/image/upload/v1617211512/urn_aaid_sc_US_7351386a-35ed-424b-a70e-62ca29f89123_2_v204li.png"/>
            </div>
        </div>
      </div>
      <div class="hero--still--wave">
        <img alt="wave" src="https://res.cloudinary.com/ia-interactive/image/upload/v1617211512/urn_aaid_sc_US_7351386a-35ed-424b-a70e-62ca29f89123_3_ry8luh.png"/>
      </div>
    </div>
  );
};

export default HeroStillComponent;
