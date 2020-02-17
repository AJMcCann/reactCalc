import React from 'react';
import './ClearButton.css';

export const ClearButton = props => (
<div className="clear-button button-wrapper arithmetic-operator" onClick={props.handleClear}>{props.children}</div>
)