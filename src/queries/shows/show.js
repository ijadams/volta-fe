import gql from "graphql-tag";

const SHOW_QUERY = gql`
  query Show {
    show {
      id
      show_name
      show_content
    }
  }
`;

export default SHOW_QUERY;
