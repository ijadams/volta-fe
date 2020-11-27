import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import SHOWS_QUERY from "../../queries/shows/shows";
import Show from "../../components/Show";

const ShowContainer = () => {
  let { id } = useParams();

  return (
    <Query query={SHOWS_QUERY} id={id}>
      {({ data: { shows } }) => {
        return (
          <div>
            <Show show={shows}/>
          </div>
        );
      }}
    </Query>
  );
};

export default ShowContainer;
