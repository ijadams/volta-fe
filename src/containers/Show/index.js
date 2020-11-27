import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import SHOW_QUERY from "../../queries/shows/show";

const ShowContainer = () => {
  let { id } = useParams();

  return (
    <Query query={SHOW_QUERY} id={id}>
      {({ data: { show } }) => {
        return (
          <div>
            <div className="show--container">
              <h1>{show.show_name} <span>&middot; {show.show_content}</span></h1>
              <iframe width="100%" height="800px" src={show.show_url} frameBorder="0"
                      title={show.show_name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default ShowContainer;
