import React from "react";
import {useParams} from "react-router";
import Query from "../../components/Query";

import HOMEPAGE_QUERY from "../../queries/homepage/homepage";

const Homepage = () => {
    let {id} = useParams();
    return (
        <Query query={HOMEPAGE_QUERY} id={id}>
            {({data: {homepage}}) => {
                return (
                    <div>
                        <div className="bg--gradient"></div>
                        <section className="hero">
                            <div>
                                <h1 className="uk-text-lead">{homepage.herotext}</h1>
                                <p>{homepage.subherotext}</p>
                                <div className="button--container">
                                    <a href="">
                                        <button
                                            className="uk-button uk-button-default one">{homepage.cta_button_1}</button>
                                    </a>
                                    <a href="">
                                        <button
                                            className="uk-button uk-button-default two">{homepage.cta_button_2}</button>
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="hero--sub left">
                            <div className="half ipad uk-cover-container">
                                <iframe src="https://omniplayer.myomni.live/?k=demo4&amp;v=Tedx~TEDx_1_1.mp4" allowFullScreen="allowfullscreen"></iframe>
                            </div>
                            <div className="half">
                                <h1>test</h1>
                            </div>
                        </section>
                        <section className="hero--sub right">
                        </section>
                        <section className="hero--sub left">

                        </section>
                    </div>
                );
            }}
        </Query>
    );
};

export default Homepage;
