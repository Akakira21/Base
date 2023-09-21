import React from 'react';

const Input = ({placeholder, value, onChange}) => {
    return (
        <div>
            <input 
                type="text" 
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default Input;