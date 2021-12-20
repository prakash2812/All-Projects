import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as orderActions from '../../../Store/action/index'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'enter name'
                },
                value: ' ',
                label: 'Name',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'enter street'
                },
                value: ' ',
                label: 'Street',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'enter zipcode'
                },
                value: ' ',
                label: 'ZipCode',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'enter country'
                },
                value: ' ',
                label: 'Country',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'enter email'
                },
                value: ' ',
                label: 'Email',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                validation: {},
                valid: true,
                value: 'fastest',
                label: 'DeliveryMethod'

            },
        },
        formIsValid: false,
    }

    //once placed order posting ingredients and contact data to back end fire base google
    orderHandler = (event) => {
        event.preventDefault();
        let userInputData = {}
        for (let data in this.state.orderForm) {
            userInputData[data] = this.state.orderForm[data].value;
        }
        const orders = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            userContactData: userInputData,
            orderOn: new Date().toLocaleString()
        }
        this.props.onPurchaseBurger(orders)
    }

    //checking input values validity should not be empty and space
    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
            console.log('required' + isValid);
        }
        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid;
            console.log('minLength' + isValid);
        }
        if (rules.maxLength) {
            isValid = value.trim().length <= rules.maxLength && isValid;
            console.log('maxLength' + isValid);
        }
        return isValid;
    }

    //each input field value updation is update to main Order form and also form validation of each input value
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderform = {
            ...this.state.orderForm
        }
        const updatedFormElement = { ...updatedOrderform[inputIdentifier] }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        console.log(updatedFormElement);
        updatedOrderform[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderform) {
            formIsValid = updatedOrderform[inputIdentifier].valid && formIsValid
        }
        this.setState({
            orderForm: updatedOrderform,
            formIsValid: formIsValid
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        // console.log(formElementsArray);
        let input = formElementsArray.map(formEle => {
            return <Input key={formEle.id}
                inValid={formEle.config.valid}
                shouldValidate={formEle.config.validation}
                touched={formEle.config.touched}
                label={formEle.config.label}
                elementType={formEle.config.elementType}
                elementConfig={formEle.config.elementConfig}
                value={formEle.config.value}
                changed={(event) => this.inputChangedHandler(event, formEle.id)} />
        })
        let form = null;
        if (this.props.spinner) {
            form = <Spinner />
        } else {
            form = <form onSubmit={this.orderHandler}>
                {input}
                <Button btnType='Success' disabled={!this.state.formIsValid}>Order</Button>
                {/* <Input elementType='' elementConfig='' value=''  />
                <Input label='Name:' inputtype='input' type='text' name='name' placeholder='your Name' />
                <Input label='Email:' inputtype='input' type='email' name='email' placeholder='your mail' />
                <Input label='Street:' inputtype='input' type='text' name='street' placeholder='your street' />
                <Input label='Zipcode:' inputtype='input' type='text' name='zipcode' placeholder='your zipcode' /> */}
            </form>
        }
        return (
            <div className={classes.ContactData}>
                <h4> Enter User details</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerdata.ingredients,
        price: state.burgerdata.totalPrice,
        spinner: state.orderdata.spinner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPurchaseBurger: (ordersData) => dispatch(orderActions.purchaseBurger(ordersData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));