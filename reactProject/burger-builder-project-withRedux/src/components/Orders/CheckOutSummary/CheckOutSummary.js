import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';
import classes from './CheckOutSummary.css';

class CheckOutSummary extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className={classes.CheckOutSummary}>
                <h2>We hope you like the taste!.</h2>
                <div style={{ width: '100%', margin: '0' }} >
                    <Burger
                        ingredients={this.props.ingredients}
                    />
                </div>
                <Button btnType='Danger' clicked={this.props.clickChekoutCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.clickCheckoutContinue}>Continue</Button>
            </div>
        );
    }
}


export default CheckOutSummary;