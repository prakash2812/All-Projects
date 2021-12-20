import React, { Component } from "react";
import { connect } from "react-redux";

import * as burgerActionTypes from "../../Store/action/index";
import * as orderActions from "../../Store/action/index";
import Aux from "../../hoc/Aux1/Auxy";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

// const INGREDIENTS_PRICES = {
//     salad: 0.5,
//     bacon: 0.5,
//     cheese: 1,
//     meat: 2
// }

class BurgerBuilder extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.initIngredients();
  }

  constructor(props) {
    super(props);
    this.state = {
      // ingredients: null,
      // totalPrice: 0,
      // purchasable: false,
      ordersummaryShow: false,
    };
  }
  orderSummaryHandler = () => {
    this.setState({ ordersummaryShow: true });
  };

  orderSummaryCancelHandler = () => {
    this.setState({ ordersummaryShow: false });
  };

  orderSummaryProceedHandler = () => {
    this.props.onInitPurchase();
    // this.setState({
    //     spinner: true
    // })
    // const orders = {
    //     ingredients: this.state.ingredients,
    //     totalPrice: this.state.totalPrice,
    //     customer: {
    //         name: 'Arjun',
    //         address: {
    //             country: 'India',
    //             street: 'Bangalore',
    //             zipcode: '5423223'
    //         },
    //         email: 'arjun@test.com',
    //         deliveryMethod: 'fastest'
    //     }
    // }
    // axios.post('/orders.json', orders)
    //     .then(response => {
    //         console.log(response)
    //         this.setState({ spinner: false, ordersummaryShow: false })
    //         // return prompt('Ordered placed sucessfully')
    //     })
    //     .catch(error => {
    //         this.setState({ spinner: false, ordersummaryShow: false })
    //     })

    this.props.history.push("/checkout");
  };

  updatePurchasable(ingredients) {
    // const ingredients = {
    //     ...this.stage.ingredients
    // }
    const sum = Object.keys(ingredients)
      .map((igkey) => ingredients[igkey])
      .reduce((sum, el) => sum + el, 0);
    return sum > 0;
  }

  render() {
    console.log("Burger builder render");

    const disabledInfo = {
      ...this.props.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    // let burger = null;

    // if (!this.state.error) {
    //     burger = <Spinner />
    // }
    let burger = this.props.error ? (
      <p style={{ align: "center" }}>Ingredients can't load...</p>
    ) : (
      <Spinner />
    );

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addItem={this.props.addIngredients}
            removeItem={this.props.removeIngredients}
            disabled={disabledInfo}
            price={this.props.totalPrice}
            purchasable={this.updatePurchasable(this.props.ingredients)}
            ordered={this.orderSummaryHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          price={this.props.totalPrice.toFixed(2)}
          cancelled={this.orderSummaryCancelHandler}
          proceded={this.orderSummaryProceedHandler}
        ></OrderSummary>
      );
    }
    return (
      <Aux>
        {burger}
        <Modal
          show={this.state.ordersummaryShow}
          modalclosed={this.orderSummaryCancelHandler}
        >
          {orderSummary}
        </Modal>
      </Aux>
    );
  }
}

const mapStateToprops = (state) => {
  console.log("return state");
  console.log(state);
  return {
    ingredients: state.burgerdata.ingredients,
    totalPrice: state.burgerdata.totalPrice,
    // purchasable: state.burgerdata.purchasable,
    error: state.burgerdata.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredients: (ingtype) =>
      dispatch(burgerActionTypes.addIngredient(ingtype)),
    removeIngredients: (ingtype) =>
      dispatch(burgerActionTypes.removeIngredient(ingtype)),
    initIngredients: () => dispatch(burgerActionTypes.initIngredients()),
    onInitPurchase: () => dispatch(orderActions.purchaseInit()),
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
