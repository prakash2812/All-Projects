import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/Checkout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/logout";
import * as authActions from "./Store/action/index";

import ReactGA from "react-ga";
ReactGA.initialize("H63806716");

class App extends Component {
  componentDidMount() {
    console.log("App js did mount");
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.props.onAuthCheckState();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />,
        <Route path="/" exact component={BurgerBuilder} />,
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={CheckOut} />,
          <Route path="/orders" component={Orders} />,
          <Route path="/logout" component={Logout} />,
          <Route path="/auth" component={Auth} />,
          <Route path="/" exact component={BurgerBuilder} />,
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <BrowserRouter>
        <div>
          <Layout>
            {routes}
            {/* <Switch>
              <Route path='/checkout' component={CheckOut} />
              <Route path='/orders' component={Orders} />
              <Route path='/auth' component={Auth} />
              <Route path='/logout' component={Logout} />
              <Route path='/' exact component={BurgerBuilder} />
            </Switch> */}
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authdata.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onAuthCheckState: () => dispatch(authActions.authCheckState()),
});
const Application = withRouter(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
