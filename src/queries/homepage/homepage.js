import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
    query Homepage {
        homepage {
            herotext
            heroimage {
                url
            }
        }
    }
`;

export default HOMEPAGE_QUERY;
