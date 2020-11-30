/**
 *
 * NotFoundPage
 * This is the component that will show when you have a 404
 */

import React from "react";

function NotFoundPage(props) {
  return (
    <div>
      <div className="not--found--container">
        <div className="logo--holder">
          <a href="/"><img alt="logo" src="https://res.cloudinary.com/drnfburmr/image/upload/v1606755433/volta-black-outline-orange_dquuyz.svg"/></a>
        </div>
        <div className="not-found">
          <h1>The page you're looking for doesn't exist.</h1>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
