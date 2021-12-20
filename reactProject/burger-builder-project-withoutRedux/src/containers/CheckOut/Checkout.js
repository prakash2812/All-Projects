import React, { Component } from 'react';
import CheckOutSummary from '../../components/Orders/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
import classes from './Checkout.css';

class CheckOut extends Component {
    state = {
        ingredients: {},
        totalPrice: 0
    }

    componentDidMount() {
        //in search="?bacon=0&cheese=1&meat=0&salad=0"
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            //['salad','1']
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contactdata')
    }

    render() {
        console.log('checkout render');
        return (
            <div >
                <CheckOutSummary
                    ingredients={this.state.ingredients}
                    clickChekoutCancelled={this.checkoutCancelledHandler}
                    clickCheckoutContinue={this.checkoutContinueHandler} />
                {/* <Route path={this.props.match.path + '/contactdata'} component={ContactData} /> */}
                <Route path={this.props.match.path + '/contactdata'} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />} />
            </div>


        );
    }
}

export default CheckOut;