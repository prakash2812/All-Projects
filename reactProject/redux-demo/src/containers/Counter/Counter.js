import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../Store/actions/index';


class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => { return { counter: prevState.counter + value } })
    //             break;
    //         case 'sub':
    //             this.setState((prevState) => { return { counter: prevState.counter - value } })
    //             break;
    //     }
    // }

    render() {
        console.log('counter rendering');
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onChangeIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onChangeDecrement} />
                <CounterControl label="Add 5" clicked={this.props.onChangeAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onChangeSub} />
                <hr />
                <button onClick={() => this.props.onShowResult(this.props.ctr)}>Show Result</button>
                <ul>
                    {this.props.showedResult.map(item =>
                        (<li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>)

                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(' return arjun state from reducers');
    console.log(state);
    return {
        ctr: state.ctr.counter,
        showedResult: state.res.result
    }
}


const dispatchToProps = dispatch => {
    console.log('dispatching');
    return {
        onChangeIncrement: () => dispatch(actionCreators.increment()),
        onChangeDecrement: () => dispatch(actionCreators.decrement()),
        onChangeAdd: () => dispatch(actionCreators.add(5)),
        onChangeSub: () => dispatch(actionCreators.sub(5)),
        onShowResult: (counterResult) => dispatch(actionCreators.showResult(counterResult)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, dispatchToProps)(Counter);