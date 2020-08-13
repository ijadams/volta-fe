import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
    query Homepage {
        homepage {
            herotext
            heroimage {
                url
            }
            subherotext
            cta_button_text
            section_1_text
            section_2_text
            section_3_text
            section_4_text
            iframe_hero_markdown
        }
    }
`;

export default HOMEPAGE_QUERY;
