import React from 'react'
import { connect } from 'react-redux'
import buyIceCream from '../redux/icecream/icecreamActions'

function icecreamContainer(props) {
    return (
        <div>
            <h2>Number of Icecreams : {props.noOfIcecreams}</h2>
            <button onClick={props.buyIceCream}>buy Icecream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfIcecreams: state.icecream.noOfIceCream
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(icecreamContainer)