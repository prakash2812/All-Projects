import React, { Component } from 'react';
import { connect } from 'react-redux'
import Order from '../../components/Orders/Order'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner';
import * as ordersAction from '../../Store/action/index'

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrdersData(this.props.token, this.props.userId)
        /* axios.get('/orders.json')
            .then(res => {
                const fetchOrdres = [];
                console.log('response');
                console.log(res);
                for (let key in res.data) {
                    fetchOrdres.push({
                        ...res.data[key],
                        id: key
                    })
                }
                console.log('fetched orders')
                console.log(fetchOrdres);
                this.setState({
                    spinner: false,
                    orders: fetchOrdres
                })

            })
            .catch(err => {
                this.setState({
                    spinner: false
                })
            }) */
    }
    render() {

        const order =

            this.props.orders.map(order => {
                return <Order ingredients={order.ingredients}
                    key={order.orderOn}
                    price={order.totalPrice}
                    name={order.userContactData.name}
                    date={order.orderOn}></Order>
            })

        return (
            <div>
                {this.props.spinner ? <Spinner></Spinner> : order}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.ordersdata.orders,
        spinner: state.ordersdata.spinner,
        error: state.ordersdata.error,
        token: state.authdata.token,
        userId: state.authdata.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrdersData: (token, userId) => dispatch(ordersAction.fetchOrders(token, userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));