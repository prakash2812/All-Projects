import React from "react";
import Aux from "../../hoc/Aux1/Auxy";
import Button from "../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => (
    <li key={igkey}>
      <span script={{ textTransform: "capitalize" }}> {igkey} </span>:
      {props.ingredients[igkey]}
    </li>
  ));
  return (
    <Aux>
      <h2> Your Order </h2>
      <p> A delicious burger with the following ingrdients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: $ {props.price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} clicked={props.cancelled}>
        Cancel
      </Button>
      <Button btnType={"Success"} clicked={props.proceded}>
        Procced
      </Button>
    </Aux>
  );
};

export default orderSummary;
