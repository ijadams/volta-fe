import React, {Component} from "react";
import Query from "../Query";
import {Link} from "react-router-dom";
import {navService} from "../../services";
import NAV_QUERY from '../../queries/nav/nav';

export class Nav extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            scrolled: false
        }
    }

    componentDidMount() {
        // subscribe to home component messages
        this.subscription = navService.getNav().subscribe(data => {
            this.setState({
                active: data.active
            })
        });
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.subscription.unsubscribe();
    }


    openNav() {
        navService.toggleNav(true);
    };

    closeNav() {
        navService.toggleNav(false);
    };

    handleScroll(event) {
        this.setState({
            scrolled: window.scrollY !== 0
        });
    }

    render() {
        return (
            <div>
                <Query query={NAV_QUERY} id={null}>
                    {({data: {nav, categories}}) => {
                        return (
                            <div>
                                <nav className={`uk-navbar-container ${this.state.scrolled ? "active" : ''}`}
                                     data-uk-navbar>
                                    <div className="uk-navbar-left">
                                        <ul className="uk-navbar-nav">
                                            <li className="desktop">
                                                <Link to="/"><img alt="4-Forty Logo" src="https://res.cloudinary.com/ia-interactive/image/upload/v1605303777/volta-2-orange-no-word_ittaff.png"/></Link>
                                            </li>
                                            <li className="mobile">
                                                <Link to="/"><img alt="4-Forty Logo" src="https://res.cloudinary.com/ia-interactive/image/upload/v1605303777/volta-2-orange-no-word_ittaff.png"/></Link>
                                            </li>
                                            <li className="omni">
                                                <a href="https://www.omnilive.tv/en/landing-page-us/" target="_blank" rel="noopener noreferrer"><span>+</span><img alt="omni-logo" src="https://res.cloudinary.com/drnfburmr/image/upload/v1606349328/Omnilive_LogoWhite300_lwomot.png"/></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="uk-navbar-right desktop">
                                        <ul className="uk-navbar-nav">
                                            <li>
                                                <a
                                                  href="/about"
                                                  rel="noopener noreferrer"
                                                  className="uk-link-reset"
                                                >
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                  href="/shows"
                                                  rel="noopener noreferrer"
                                                  className="uk-link-reset"
                                                >
                                                    Shows
                                                </a>
                                            </li>
                                            <li>
                                                <a href={nav.signup_link}
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                    <button
                                                      className="uk-button uk-button-default uk-button-secondary">
                                                        {nav.signup_text}
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="uk-navbar-right mobile">
                                        <div className={`nav--button ${this.state.active ? "uk-hidden" : ""}`}
                                             onClick={this.openNav}><span uk-icon="icon: menu; ratio: 2"></span>
                                        </div>
                                        <div className={`nav--button ${this.state.active ? "" : "uk-hidden"}`}
                                             onClick={this.closeNav}><span
                                            uk-icon="icon: close; ratio: 2"></span>
                                        </div>
                                    </div>

                                    <div className={`nav--overlay ${this.state.active ? "active" : ""}`}>
                                        <ul>
                                            <li onClick={this.closeNav}>
                                                <Link to="/about">
                                                    About
                                                </Link>
                                            </li>
                                            <li onClick={this.closeNav}>
                                                <Link to="/shows">
                                                    Shows
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    href={nav.signup_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="uk-link-reset"
                                                >
                                                    {nav.signup_text}
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="logo--container">
                                            <img
                                              src="https://ijadams.s3.amazonaws.com/volta/volta-black-outline-orange.svg"
                                              alt="volta nav logo"/>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export default Nav;
