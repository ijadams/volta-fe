/* eslint-disable */

import React from "react";
import TargetComponent from "../../TargetComponent";

const HomeSectionThree = (props) => {

  const items = [];


  for (const [index, show] of props.data.entries()) {
    const imageUrl =
      process.env.NODE_ENV !== "development"
        ? show.show_image.url
        : process.env.REACT_APP_BACKEND_URL + show.show_image.url;

    items.push(
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

  const getClassName = () => {
    if (props.data.length < 4) {
      return 'one--row grid-container'
    }
    if (props.data.length < 7) {
      return 'two--row grid-container'
    }
    return 'grid-container';
  }

  return (
    <div>
      <div id="home--section--three" className="home--section">

        <TargetComponent>
          <div className="text--container">
            <h1>Our Collaborators</h1>
          </div>
        </TargetComponent>

        <div className={getClassName()}>
          {items}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
