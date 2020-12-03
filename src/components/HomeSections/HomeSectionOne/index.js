import React from "react";
import { Link } from "react-router-dom";

const HomeSectionOne = () => {
  return (
    <div>
      <div id="home--section--one" className="home--section">
        <h1>
          Performance that brings creators and audience together
        </h1>

        <p>
          <span className="text--mask">
              <span className="reveal">
                  <span className="normal">Powered by OmniLive™</span><br/>The world’s leading All-in-one Interactive Multi Points of View Livestream Solution <br/> VOLTA is an intuitive Live Streaming and Video-On-Demand platform with patented multi-cam and multi-view touch-player technology so you are the Director.
              </span>
          </span>
        </p>

        <p className="button--container">
          <span className="text--mask">
              <span className="reveal">
                    <Link to={`/shows`} className="uk-link-reset"><button
                      className="uk-button uk-button-default uk-button-secondary">View Shows</button>
                    </Link>
              </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomeSectionOne;
