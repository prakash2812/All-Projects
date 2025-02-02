import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/Checkout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              <Route path='/checkout' component={CheckOut} />
              <Route path='/orders' component={Orders} />
              <Route path='/' exact component={BurgerBuilder} />
              {/* <BurgerBuilder /> */}
              {/* <CheckOut /> */}
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;
