import React from 'react';

const Button = (props) => {
    return (
        
            <button style={{color: props.color}}>{props.text}</button>
        
    );
}

export default Button;
