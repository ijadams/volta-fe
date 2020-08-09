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
            section_1_text
            section_2_text
            section_3_text
            section_4_text
        }
    }
`;

export default HOMEPAGE_QUERY;
