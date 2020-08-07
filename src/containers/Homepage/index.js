import React from "react";
import {useParams} from "react-router";
import Query from "../../components/Query";

import HOMEPAGE_QUERY from "../../queries/homepage/homepage";

const Homepage = () => {
    let {id} = useParams();
    return (
        <Query query={HOMEPAGE_QUERY} id={id}>
            {({data: {homepage}}) => {
                const imageUrl =
                    process.env.NODE_ENV !== "development"
                        ? homepage.heroimage.url
                        : process.env.REACT_APP_BACKEND_URL + homepage.heroimage.url;
                return (
                    <div>
                        <section class="hero">
                            <div
                                id="banner"
                                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                                data-src={imageUrl}
                                data-srcset={imageUrl}
                                data-uk-img
                            >
                            </div>
                        </section>
                    </div>
                );
            }}
        </Query>
    );
};

export default Homepage;
