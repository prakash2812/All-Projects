import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../Aux1/Auxy";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideToggleHandler = () => {
    // this.setState({
    //     showSideDrawer: !this.state.showSideDrawer
    // })

    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          toggleclicked={this.sideToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {/* <div> Toolbar, sideDrawer, Backdrop</div> */}
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authdata.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
