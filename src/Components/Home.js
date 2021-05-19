import React, { useState } from 'react';
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { setUserDetails } from './UserSlice'
import { useHistory } from 'react-router'
import Input from './Input'
import Select from './Select'

function Home() {
    const dispatch=useDispatch();
    const history=useHistory();
    const title=useSelector(state=>state.user.title);
    const firstName=useSelector(state=>state.user.firstName);
    const lastName=useSelector(state=>state.user.lastName);
    const dateOfBirth=useSelector(state=>state.user.dateOfBirth);
    const houseNumber=useSelector(state=>state.user.houseNumber);
    const postCode=useSelector(state=>state.user.postCode);
    const employmentStatus=useSelector(state=>state.user.employmentStatus);
    const annualIncome=useSelector(state=>state.user.annualIncome);
    const [t,setT]=useState('');
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [dob,setDob]=useState('');
    const [hno,setHno]=useState('');
    const [pc,setPc]=useState('');
    const [es,setEs]=useState('');
    const [ai,setAi]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(t && fname && lname && dob && hno && pc && es && ai)
        {
            dispatch(setUserDetails({title:t,firstName:fname,lastName:lname,dateOfBirth:dob,houseNumber:hno,postCode:pc,employmentStatus:es,annualIncome:ai}));
            history.push({
                pathname: '/details'
             })
        }
       else
            alert("Please fill the form details")
    }

    return (
        <div className="wrapper">
            <div className="container">
            <div className='row'>
            <div className='col-sm-5 col-xs-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='row'>
            <div className='col-12'>
            <div className="f">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-group">
                    <Select type="Title" labelName="Title" className="form-control-d" onChange={e=>setT(e.target.value)} name={title}/>
                </div>
                <div className="form-group">
                    <Input type="text" labelName="First name" className="form-control-i" onChange={e=>setFname(e.target.value)} name={firstName}/>
                </div>
                <div className="form-group">
                    <Input type="text" labelName="Last name" className="form-control-i" onChange={e=>setLname(e.target.value)} name={lastName}/>
                </div>
                <div className="form-group">
                    <Input type="date" labelName="Date of Birth" className="form-control" onChange={e=>setDob(e.target.value)} name={dateOfBirth}/>
                </div>
                <div className="form-group">
                    <Input type="text" labelName="House Number" className="form-control-i" onChange={e=>setHno(e.target.value)} name={houseNumber}/>
                </div>
                <div className="form-group">
                    <Input type="text" labelName="Postcode" className="form-control-i" onChange={e=>setPc(e.target.value)} name={postCode}/>
                </div>
                <div className="form-group">
                    <Select type="Employment Status" labelName="Employment Status" className="form-control-d"  onChange={e=>setEs(e.target.value)} name={employmentStatus}/>
                </div>
                <div className="form-group">
                    <Input type="text" labelName="Annual Income" className="form-control-i" onChange={e=>setAi(e.target.value)} name={annualIncome}/>
                </div>
                <button type="submit" className="btn btn-primary">Continue{" >"}</button>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Home;