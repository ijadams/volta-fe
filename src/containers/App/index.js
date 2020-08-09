import React, {Component} from "react";

import { Switch, Route } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Article from "../Article";
import Category from "../Category";
import Homepage from "../Homepage";
import {navService} from "../../services";

export class App extends Component {

    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        // subscribe to home component messages
        this.subscription = navService.getNav().subscribe(data => {
            this.setState({
                active: data.active
            })
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div className="App">
                <Nav />
                <main className={`${this.state.active ? "uk-hidden" : ""}`}>
                    <Switch>
                        <Route path="/" component={Homepage} exact />
                        <Route path="/article/:id" component={Article} exact />
                        <Route path="/category/:id" component={Category} exact />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
