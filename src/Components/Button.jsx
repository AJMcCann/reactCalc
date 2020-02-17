import React from 'react';
import './Button.css';

const isNotOperator = val => {
    return !isNaN(val) || val === "." || val === "=" || val === "(" || val === ")";
}

export const Button = props => (
    <div className={`button-wrapper ${isNotOperator(props.children) ? null : "arithmetic-operator"}`} onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
)

