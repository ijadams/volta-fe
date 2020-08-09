import React from "react";
import {useParams} from "react-router";
import Query from "../../components/Query";
import HOMEPAGE_QUERY from "../../queries/homepage/homepage";
import ReactMarkdown from 'react-markdown';

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
                                    <a href="http://apple.com">
                                        <button
                                            className="uk-button uk-button-default one">{homepage.cta_button_1}</button>
                                    </a>
                                    <a href="http://apple.com">
                                        <button
                                            className="uk-button uk-button-default two">{homepage.cta_button_2}</button>
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="hero--sub">
                            <div className="half uk-cover-container left chrome--container">
                                <div className="chrome uk-box-shadow-large">
                                    <iframe title="4-forty Demo Video"
                                            src="https://omniplayer.myomni.live/?k=demo4&amp;v=Tedx~TEDx_1_1.mp4"
                                            allowFullScreen="allowfullscreen"></iframe>
                                </div>
                            </div>
                            <div className="half">
                                <div className="uk-padding-large">
                                    <ReactMarkdown source={homepage.section_1_text}/>
                                    <img alt="this is some good stuff" src="https://i.vimeocdn.com/custom_asset/1152.png"/>
                                </div>
                            </div>
                        </section>
                        <section className="hero--sub right">
                            <div className="half">
                                <div className="uk-padding-large">
                                    <ReactMarkdown source={homepage.section_2_text}/>
                                </div>
                            </div>
                            <div className="half">
                                <div className="iphone-ipad"></div>
                            </div>
                        </section>
                        <section className="hero--sub left">
                            <div className="half">
                                <div className="analytics"></div>
                            </div>
                            <div className="half">
                                <div className="uk-padding-large">
                                    <ReactMarkdown source={homepage.section_3_text}/>
                                </div>
                            </div>
                        </section>
                        <section className="hero--sub right">
                            <div className="half">
                                <div className="uk-padding-large">
                                    <img alt="quotes" class="quotes"
                                         src="https://res.cloudinary.com/ia-interactive/image/upload/v1597007824/quote_kyjd9b.png"/>
                                    <ReactMarkdown source={homepage.section_4_text}/>
                                </div>
                            </div>
                            <div className="half">
                                <div className="logos"></div>
                            </div>
                        </section>

                        <section className="mega-frame">
                            <iframe title="4-forty Demo Video"
                                    src="https://omniplayer.myomni.live/?k=demo4&amp;v=Tedx~TEDx_1_1.mp4"
                                    allowFullScreen="allowfullscreen"></iframe>
                        </section>

                        <section className="hero--sub last-call">
                            <div>
                                <div>
                                    <h3>Over 150 million creators and brands love our technology.</h3>
                                    <p>Join Us <span uk-icon="icon: arrow-right; ratio: 1"></span></p>
                                </div>
                            </div>
                        </section>
                    </div>
                );
            }}
        </Query>
    );
};

export default Homepage;
