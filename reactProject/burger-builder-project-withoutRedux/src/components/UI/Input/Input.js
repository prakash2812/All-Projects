import React from 'react';
import classes from './Input.css'

const input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement]
    if (!props.inValid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = <select
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed} >
                {props.elementConfig.options.map(items =>
                    <option key={items.value} value={items.value}>{items.displayValue}</option>
                )}
            </select>

            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}<span class="">* </span></label>

            {inputElement}
        </div>
    );
}

export default input;