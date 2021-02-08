import React from "react";
import Query from "../../components/Query";
import TICKET_SPICE_QUERY from "../../queries/ticket-spice/ticket-spice";

const TicketSpiceContainer = () => {

  return (
    <Query query={TICKET_SPICE_QUERY}>
      {({ data: { ticketSpice } }) => {
        return (
          <div>
            <div className="show--container">
              <iframe width="100%" height="800px" src={ticketSpice.ticketspice_iframe_url} frameBorder="0"
                      title="test"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default TicketSpiceContainer;
