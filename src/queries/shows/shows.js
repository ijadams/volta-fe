import gql from "graphql-tag";

const SHOWS_QUERY = gql`
  query Shows {
    shows {
      id
      show_name
      show_content
    }
  }
`;

export default SHOWS_QUERY;
