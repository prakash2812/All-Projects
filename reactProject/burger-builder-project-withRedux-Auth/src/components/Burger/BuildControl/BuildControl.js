import React from 'react';
import classes from '../BuildControl/BuildControl.css'


const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.less}
                disabled={props.disabled}>less</button>
            <button
                className={classes.More}
                onClick={props.more} > more</button>
        </div>
    )
}

export default buildControl;