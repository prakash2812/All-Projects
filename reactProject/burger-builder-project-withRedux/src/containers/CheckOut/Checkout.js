import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CheckOutSummary from "../../components/Orders/CheckOutSummary/CheckOutSummary";
import ContactData from "./ContactData/ContactData";
import * as orderActions from "../../Store/action/index";

import classes from "./Checkout.css";
import Aux from "../../hoc/Aux1/Auxy";

class CheckOut extends Component {
  // componentWillMount() {
  //     this.props.onInitPurchase()
  // }
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contactdata");
  };

  render() {
    console.log("checkout render");
    let summary = <Redirect to="/" />;
    if (this.props.ingredients) {
      const purchased = this.props.purchased ? <Redirect to="/" /> : null;
      summary = (
        <Aux>
          {purchased}
          <CheckOutSummary
            ingredients={this.props.ingredients}
            clickChekoutCancelled={this.checkoutCancelledHandler}
            clickCheckoutContinue={this.checkoutContinueHandler}
          />
          <Route
            path={this.props.match.path + "/contactdata"}
            component={ContactData}
          />
        </Aux>
      );
    }

    return (
      <div>
        {summary}
        {/* <Route path={this.props.match.path + '/contactdata'} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />} /> */}
      </div>
    );
  }
}

const mapIngredients = (state) => {
  return {
    ingredients: state.burgerdata.ingredients,
    purchased: state.orderdata.purchased,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onInitPurchase: () => dispatch(orderActions.purchaseInit())
//     }
// }
export default connect(mapIngredients)(CheckOut);
