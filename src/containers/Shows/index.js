import React from "react";
import { useParams } from "react-router";
import Shows from "../../components/Shows";
import Query from "../../components/Query";
import SHOWS_QUERY from "../../queries/shows/shows";

const ShowsContainer = () => {
  let { id } = useParams();

  return (
    <Query query={SHOWS_QUERY} id={id}>
      {({ data: { shows } }) => {
        return (
          <div>
            <Shows shows={shows}/>
          </div>
        );
      }}
    </Query>
  );
};

export default ShowsContainer;
