import gql from "graphql-tag";

const LIVE_STREAM_QUERY = gql`
  query Livestream {
    liveShow {
        id
        show_name
        show_content
        show_url
    }
  }
`;

export default LIVE_STREAM_QUERY;
