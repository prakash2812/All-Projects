import React, { Component } from "react";
import Aux from "../../hoc/Aux1/Auxy";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.5,
  cheese: 1,
  meat: 2,
};

class BurgerBuilder extends Component {
  componentDidMount() {
    console.log(this.props);
    axios
      .get("/Ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 0,
      purchasable: false,
      ordersummaryShow: false,
      spinner: false,
      error: false,
    };
  }
  orderSummaryHandler = () => {
    this.setState({ ordersummaryShow: true });
  };

  orderSummaryCancelHandler = () => {
    this.setState({ ordersummaryShow: false });
  };

  orderSummaryProceedHandler = () => {
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
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  updatePurchasable(ingredients) {
    // const ingredients = {
    //     ...this.stage.ingredients
    // }
    const sum = Object.keys(ingredients)
      .map((igkey) => ingredients[igkey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const newIngredient = { ...this.state.ingredients };
    newIngredient[type] = updatedCount;

    const oldprice = this.state.totalPrice;
    const newPrice = INGREDIENTS_PRICES[type] + oldprice;
    // if (newPrice > 0) {
    //     this.setState({ purchasable: true })
    // }
    this.setState({
      ingredients: newIngredient,
      totalPrice: newPrice,
    });
    this.updatePurchasable(newIngredient);
    console.log("after update puchasable");
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const newIngredient = { ...this.state.ingredients };
    newIngredient[type] = updatedCount;

    const oldprice = this.state.totalPrice;
    const newPrice = oldprice - INGREDIENTS_PRICES[type];

    // if (newPrice > 0) {
    //     this.setState({ purchasable: true })
    // } else {
    //     this.setState({ purchasable: false })
    // }
    this.setState({
      ingredients: newIngredient,
      totalPrice: newPrice,
    });
    this.updatePurchasable(newIngredient);
  };

  render() {
    console.log("Burger builder render");

    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    // let burger = null;

    // if (!this.state.error) {
    //     burger = <Spinner />
    // }
    let burger = this.state.error ? <p>Ingredients can't load</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addItem={this.addIngredientHandler}
            removeItem={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.orderSummaryHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice.toFixed(2)}
          cancelled={this.orderSummaryCancelHandler}
          proceded={this.orderSummaryProceedHandler}
        ></OrderSummary>
      );
    }
    if (this.state.spinner) {
      orderSummary = <Spinner />;
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

export default withErrorHandler(BurgerBuilder, axios);
