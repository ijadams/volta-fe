import React from "react";
import Shows from "../../components/Shows";
import Query from "../../components/Query";
import SHOWS_QUERY from "../../queries/shows/shows";

const ShowsContainer = () => {

  return (
    <Query query={SHOWS_QUERY}>
      {({ data: { shows } }) => {
        return (
          <div>
            <div className="shows--container">
              <div className="title--container">
                <h1>Upcoming Shows</h1>
                <hr></hr>
              </div>
              <Shows shows={shows}/>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default ShowsContainer;
