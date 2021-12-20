
import React from 'react'
import classes from './Order.css'
import { object } from 'prop-types'

const order = (props) => {
    // props.fetchdata.map()
    let ingredients = [];

    for (let key in props.ingredients) {
        ingredients.push({
            name: key,
            amount: props.ingredients[key]
        })
    }

    let ingredientsOutPut = ingredients.map(igkey => {
        return <span>{igkey.name} ({igkey.amount})</span>
    })
    return (

        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutPut}</p>
            {/* <p>{props.customer}</p> */}
            <p><strong>Price $ {props.price}</strong></p>

        </div>
    )
}

export default order;