import gql from "graphql-tag";

const ABOUT_QUERY = gql`
    query About {
        about {
            content
        }
    }
`;

export default ABOUT_QUERY;
