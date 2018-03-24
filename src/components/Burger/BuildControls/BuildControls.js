import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(elem => (
                 <BuildControl 
                    key={elem.label} 
                    label={elem.label}
                    added={() => props.addHandler(elem.type)}
                    removed={() => props.removeHandler(elem.type)}
                    disabled={props.disabled[elem.type]} />
            ))}
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchaseable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
);

export default buildControls;