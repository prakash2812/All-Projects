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
      <b>
        {" "}
        A delicious burger with the following ingredients:{" "}
        <span>&#128523;</span>{" "}
      </b>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: $ {props.price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} clicked={props.cancelled}>
        Cancel
      </Button>
      <Button btnType={"Success"} clicked={props.proceded}>
        Proceed
      </Button>
    </Aux>
  );
};

export default orderSummary;
