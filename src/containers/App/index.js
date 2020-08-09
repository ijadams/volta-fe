import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Article from "../Article";
import Category from "../Category";
import Homepage from "../Homepage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
