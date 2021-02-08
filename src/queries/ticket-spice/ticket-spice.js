import gql from "graphql-tag";

const TICKET_SPICE_QUERY = gql`
  query Ticketspice {
    ticketSpice {
        ticketspice_iframe_url
    }
  }
`;

export default TICKET_SPICE_QUERY;
