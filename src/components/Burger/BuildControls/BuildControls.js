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
            {controls.map(elem => (
                 <BuildControl 
                    key={elem.label} 
                    label={elem.label}
                    added={() => props.addHandler(elem.type)}
                    removed={() => props.removeHandler(elem.type)}
                    disabled={props.disabled[elem.type]} />
            ))}
        </div>
);

export default buildControls;