import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import DashBoard from "../components/DashBoard";
import Create from "../components/Create";
import Edit from "../components/Edit";
import About from "../components/About";
import NotFound from "../components/NotFound";
import Game from "../components/Game";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/about" component={About} />
        <Route
          path="/game"
          render={() => <Game challengeRange={[2, 9]} challengeSize={6} />}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
