import React, { Component } from "react";
import Aux from "../Aux1/Auxy";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    errorConfirmedHandler = () => {
      this.setState({
        error: null,
      });
    };

    UNSAFE_componentWillMount() {
      console.log("Inside HOC did mount");
      this.reqInterceptor = axios.interceptors.request.use(
        (request) => {
          this.setState({
            error: null,
          });
          return request;
        },
        (error) => {
          this.setState({
            error: error,
          });
        }
      );

      this.resInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          console.log("inside response interceptor");
          this.setState({
            error: error,
          });
        }
      );
    }

    UNSAFE_componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      console.log("first HOC render");

      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalclosed={this.errorConfirmedHandler}
          >
            {/* {this.state.error.message} */}
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
//
