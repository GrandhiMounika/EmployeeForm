import React from 'react';

const Input = ({ type, id, labelName, className, onChange, name, value }) => {
    return (
        <div>
            <label htmlFor={name} style={{display: "inline-block", width: "160px", textAlign: "left"}}>{labelName}</label>
            <input type={type} id={id} name={name} className={className} onChange={onChange} value={value}/>
        </div>
        )
};

export default Input;