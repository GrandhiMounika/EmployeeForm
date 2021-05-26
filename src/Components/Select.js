import React from 'react';

const Select = ({ type, id, labelName, className, onChange, name, value }) => {
    const t_options=[
        { id: "mr", name: "Mr" },
        { id: "mrs", name: "Mrs" },
        { id: "ms", name: "Ms" },
        { id: "miss", name: "Miss" },
        { id: "dr", name: "Dr" },
        { id: "Rev", name: "Rev" },
        { id: "Other", name: "Other" }
    ]
    const es_options=[
        { id: "fulltime", name: "Full Time" },
        { id: "parttime", name: "Part Time" },
        { id: "selfemployed", name: "Self Employed" },
        { id: "student", name: "Student" },
        { id: "unemployed", name: "Unemployed" },
        { id: "retired", name: "Retired" },
        { id: "homemaker", name: "Homemaker" }
    ]
    switch(type){
        case 'Title':
            return(
                <div>
                    <label htmlFor={name} style={{display: "inline-block", width: "160px", textAlign: "left"}}>{labelName}</label>
                    <select id={id} name={name} className={className} onChange={onChange} value={value}>
                        <option>Please select...</option>
                        {t_options.map((op) => <option key={op.id}>{op.name}</option>)}
                    </select>
                </div>
            )
        case 'Employment Status':
            return(
                <div>
                    <label htmlFor={name} style={{display: "inline-block", width: "160px", textAlign: "left"}}>{labelName}</label>
                    <select id={id} name={name} className={className} onChange={onChange} value={value}>
                        <option>Please select...</option>
                        {es_options.map((op) => <option key={op.id}>{op.name}</option>)}
                    </select>
                </div>
            )
        default:
            return null
    }
};

export default Select;