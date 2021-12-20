import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from '../Burger/Burger.css';
import { withRouter } from 'react-router-dom'

const burger = (props) => {
    console.log(props);
    let transformIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey} />
            });
        })
        .reduce((arr, ele) => {
            return arr.concat(ele)
        }, []);

    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please add ingredients to burger!</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>



    )
};

export default withRouter(burger);