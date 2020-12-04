import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql `
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
            iframe_section_2_markdown
            iframe_section_3_markdown
            iframe_section_4_markdown
        }
  			shows {
          id
          show_name
          show_content
          show_image {
            url
          }
          created_at
        }
  			partners {
          name
          image {
            url
          }
        }
}
`;

export default HOMEPAGE_QUERY;