import React, { useState } from 'react'
import buyCake from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2> Number of cakes : {props.numOfcakes}</h2>
            <input type='text' value={number} onChange={(event) => setNumber(event.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfcakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);