import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControl/BuildControl'

const buildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' }
    ]

    return (
        <div className={classes.BuildControls}>
            <p><strong>Current Price: $ {props.price}</strong> </p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    more={() => props.addItem(ctrl.type)}
                    less={() => props.removeItem(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>{props.isAuth ? "Order Now" : " Sign Up/In To Order"}</button>

        </div>
    );
}

export default buildControls;