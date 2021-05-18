import React from 'react';

const DropDown = ({type,labelName,className,onChange,name}) => {
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
                    <select className={className} onChange={onChange}>
                        <option>Please select...</option>
                        {t_options.map((op) => <option key={op.id}>{op.name}</option>)}
                    </select>
                </div>
            )
        case 'Employment Status':
            return(
                <div>
                    <label htmlFor={name} style={{display: "inline-block", width: "160px", textAlign: "left"}}>{labelName}</label>
                    <select className={className} onChange={onChange}>
                        <option>Please select...</option>
                        {es_options.map((op) => <option key={op.id}>{op.name}</option>)}
                    </select>
                </div>
            )
        default:
                return null;
    }
};

export default DropDown;