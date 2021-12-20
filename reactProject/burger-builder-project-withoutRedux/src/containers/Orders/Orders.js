import React, { Component } from 'react';
import Order from '../../components/Orders/Order'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: [],
        spinner: true
    }
    componentDidMount() {
        axios.get('/orders.json')
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
            })
    }
    render() {

        const order =

            this.state.orders.map(order => {
                return <Order ingredients={order.ingredients} price={order.totalPrice}></Order>
            })

        return (
            <div>
                {order}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);