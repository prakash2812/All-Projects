
import React from 'react'
import classes from './Order.css'

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
        return <span>{igkey.name} {igkey.amount}</span>
    })

    // const date = new Date().toLocaleString();

    return (
        <div className={classes.Order}>
            <p> <strong >Ordered on:</strong> {props.date} </p>
            <p><strong>Ingredients:</strong> {ingredientsOutPut}</p>
            <p><strong>Ordered By:</strong>{props.name}</p>
            {/* <p>{props.customer}</p> */}
            <p><strong>Price $ {props.price}</strong></p>
        </div>
    )
}

export default order;