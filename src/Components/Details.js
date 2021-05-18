import React from 'react';
import { useSelector } from 'react-redux'

function Details() {
    const data=useSelector(state=>state.user);
    if(window.performance){
        if(performance.navigation.type===1){
            window.location.assign('/')
        }
    }
    
    return (
        <div style={{font: "normal 18px/1.5 Fira Sans, Helvetica Neue, sans-serif"}}>
            <h1>Employee Details</h1>
            <p>Title: {data.title}</p>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Date of Birth: {data.dateOfBirth}</p>
            <p>House Number: {data.houseNumber}</p>
            <p>Post Code: {data.postCode}</p>
            <p>Employment Status: {data.employmentStatus}</p>
            <p>Annual Income: {data.annualIncome}</p>
        </div>
    );
}

export default Details;