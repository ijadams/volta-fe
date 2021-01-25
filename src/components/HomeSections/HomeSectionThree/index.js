/* eslint-disable */

import React from "react";
import TargetComponent from "../../TargetComponent";

const HomeSectionThree = (props) => {

  const shows = [];
  const partners = [];

  for (const [index, show] of props.shows.entries()) {
    const imageUrl =
      process.env.NODE_ENV !== "development"
        ? show.show_image.url
        : process.env.REACT_APP_BACKEND_URL + show.show_image.url;

    shows.push(
      <div className='item--container' key={index}>
        <TargetComponent>
          <div className='grid-img' style={{ backgroundImage: "url(" + imageUrl + ")" }}>
            <div className='container'>
              <p>{show.show_name}</p>
            </div>
          </div>
        </TargetComponent>
      </div>
    );
  }

  for (const [index, partner] of props.partners.entries()) {
    const imageUrl =
      process.env.NODE_ENV !== "development"
        ? partner.image.url
        : process.env.REACT_APP_BACKEND_URL + partner.image.url;

    partners.push(
      <div className='item--container' key={index}>
        <TargetComponent>
          <div className='grid-img' style={{ backgroundImage: "url(" + imageUrl + ")" }}>
            <a href={partner.link} target="_blank">
              <div className='container'>
                <p>{partner.name}</p>
              </div>
            </a>
          </div>
        </TargetComponent>
      </div>
    );
  }

  const getShowsClassName = () => {
    if (props.shows.length < 4) {
      return 'one--row grid-container'
    }
    if (props.shows.length < 7) {
      return 'two--row grid-container'
    }
    return 'grid-container';
  }

  const getPartnersClassName = () => {
    if (props.partners.length < 4) {
      return 'one--row grid-container'
    }
    if (props.partners.length < 7) {
      return 'two--row grid-container'
    }
    return 'grid-container';
  }
  return (
    <div>
      <div id="home--section--three" className="home--section">

        <div class="three--container">
          <TargetComponent>
            <div className="text--container">
              <h1>Our Collaborators</h1>
            </div>
          </TargetComponent>

          <div className={getShowsClassName()}>
            {shows}
          </div>
        </div>


        <div class="three--container">
            <TargetComponent>
              <div className="text--container">
                <h1>Our Industry Partners</h1>
              </div>
            </TargetComponent>

            <div className={getPartnersClassName()}>
              {partners}
            </div>
        </div>   
      </div>
    </div>
  );
};

export default HomeSectionThree;
