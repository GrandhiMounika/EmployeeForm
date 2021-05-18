import React from 'react';

const Input = ({ type, labelName, className, onChange, name }) => {
    return (
        <div>
            <label htmlFor={name} style={{display: "inline-block", width: "160px", textAlign: "left"}}>{labelName}</label>
            <input type={type} className={className} onChange={onChange} name={name}/>
        </div>
        )
}

export default Input;