import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
    query Homepage {
        homepage {
            herotext
            heroimage {
                url
            }
            subherotext
            cta_button_1
            cta_button_2
        }
    }
`;

export default HOMEPAGE_QUERY;
