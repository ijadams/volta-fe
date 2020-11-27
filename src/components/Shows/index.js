import React from "react";
import { Link } from "react-router-dom";

const Shows = ({ shows }) => {
  return (
    <div>
      {shows.map((show, i) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? show.show_image.url
            : process.env.REACT_APP_BACKEND_URL + show.show_image.url;

        return <div className="show--row" key={show.id}>
                  <div className='show--image' style={{ backgroundImage: "url(" + imageUrl + ")" }}>
                    <div className="watch-now">
                      <Link to={`/shows/${show.id}`} className="uk-link-reset">
                        <div className="container">
                          <p>Watch {show.show_name} now</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <h2>{show.show_name}</h2>
                  <p>{show.show_content}</p>
              </div>;
      })}
    </div>
  );
};

export default Shows;
