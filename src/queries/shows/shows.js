import gql from "graphql-tag";

const SHOWS_QUERY = gql`
  query Shows {
    shows {
      id
      show_name
      show_content
      show_image {
        url
      }
      created_at
    }
  }
`;

export default SHOWS_QUERY;
