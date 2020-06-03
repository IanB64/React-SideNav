import React from "react";
import history from "./history";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SideNav from "./components/SideNav";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history} basename={`${process.env.PUBLIC_URL}/`}>
        <SideNav />

        <Switch>
          <Route exact path="/">
            <Redirect to="/cs-home" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
