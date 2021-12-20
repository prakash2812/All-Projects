import React, { PureComponent } from "react";
import classes from "./Modal.css";
import BackDrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux1/Auxy";

class Modal extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('inside modal should componentcomponent')
  //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  // }

  render() {
    return (
      <Aux>
        <BackDrop
          show={this.props.show}
          clicked={this.props.modalclosed}
        ></BackDrop>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
