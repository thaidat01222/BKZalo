import React from 'react';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
    const { icon } = props;
    return (
      <img className={`toolbar-button ${icon}`} src={`./${icon}.svg`}/>
    );
}