import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import LIVE_STREAM_QUERY from "../../queries/shows/live-stream/live-stream";

const LiveStreamContainer = () => {
  let { id } = useParams();

  return (
    <Query query={LIVE_STREAM_QUERY} id={id}>
      {({ data: { liveShow } }) => {
        return (
          <div>
            <div className="show--container">
              <h1>{liveShow.show_name} <span>&middot; {liveShow.show_content}</span></h1>
              <iframe width="100%" height="800px" src={liveShow.show_url} frameBorder="0"
                      title={liveShow.show_name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default LiveStreamContainer;
