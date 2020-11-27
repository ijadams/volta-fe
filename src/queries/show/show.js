import gql from "graphql-tag";

const SHOW_QUERY = gql`
  query Shows($id: ID!) {
    show(id: $id) {
      id
      show_name
      show_content
      show_image {
        url
      }
      published_at
    }
  }
`;

export default SHOW_QUERY;
