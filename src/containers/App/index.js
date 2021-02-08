import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Category from "../Category";
import Homepage from "../Homepage";
import AuthPage from "../AuthPage";
import NotFoundPage from "../NotFoundPage";
import { navService } from "../../services";
import PrivateRoute from "../../containers/PrivateRoute";
import { About } from "../../containers/About";
import ShowsContainer from "../../containers/Shows";
import ShowContainer from '../../containers/Show';
import LiveStreamContainer from '../../containers/LiveStream';
import TicketSpiceContainer from '../../containers/TicketSpice'

export class App extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null
    };
  }

  componentDidMount() {
    // subscribe to home component messages
    this.navsub = navService.getNav().subscribe(data => {
      this.setState({
        loaded: data.active
      });
    });
    this.usersub = navService.getUser().subscribe(data => {
      this.setState({
        user: data.user
      });
    });
  }

  componentWillUnmount() {
    this.navsub.unsubscribe();
    this.usersub.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <main className={`${this.state.loaded ? "hide" : ""}`}>
          <Switch>
            <PrivateRoute exact path="/" component={Homepage}/>
            <Route exact path="/about" component={About}/>
            <Route path="/shows" component={ShowsContainer} exact/>
            <PrivateRoute path="/shows/:id?" component={ShowContainer} exact/>
            <Route path="/auth/:authType/:id?" component={AuthPage}/>
            <PrivateRoute path="/category/:id" component={Category} exact/>
            <PrivateRoute path="/live-stream" component={LiveStreamContainer} exact/>
            <PrivateRoute path="/ticket-spice" component={TicketSpiceContainer} exact/>
            <Route component={NotFoundPage}/>
          </Switch>
        </main>
        <Footer className={`${this.state.loaded ? "hide" : ""}`}/>
      </div>
    );
  }
}

export default App;
