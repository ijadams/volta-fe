import React from "react";
import Query from "../Query";
import {Link} from "react-router-dom";

import NAV_QUERY from '../../queries/nav/nav';

const Nav = () => {
    return (
        <div>
            <Query query={NAV_QUERY} id={null}>
                {({data: {nav, categories}}) => {
                    const desktopimageUrlImageUrl =
                        process.env.NODE_ENV !== "development"
                            ? nav.navlogo.url
                            : process.env.REACT_APP_BACKEND_URL + nav.navlogo.url;
                    const mobileImageUrl =
                        process.env.NODE_ENV !== "development"
                            ? nav.navlogo.url
                            : process.env.REACT_APP_BACKEND_URL + nav.navlogomobile.url;
                    return (
                        <div>
                            <nav className="uk-navbar-container" data-uk-navbar>
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li className="desktop">
                                            <Link to="/"><img src={desktopImageUrl}/></Link>
                                        </li>
                                        <li className="mobile">
                                            <Link to="/"><img src={mobileImageUrl}/></Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="uk-navbar-right">
                                    <ul className="uk-navbar-nav">
                                        {categories.map((category, i) => {
                                            return (
                                                <li key={category.id}>
                                                    <Link
                                                        to={`/category/${category.id}`}
                                                        className="uk-link-reset"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                        <li>
                                            <a href="">
                                                <button className="uk-button uk-button-default uk-button-secondary">sign
                                                    up
                                                </button>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};

export default Nav;
