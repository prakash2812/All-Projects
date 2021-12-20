import React from 'react'
import buyCake from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const cakeContainer = (props) => {
    return (
        <div>
            <h2> Number of cakes : {props.numOfcakes}</h2>
            <button onClick={props.buyCake}>Buy cakes</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);