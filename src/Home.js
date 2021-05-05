import React, { useState } from 'react';
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { setUserDetails } from './UserSlice'
import { useHistory } from 'react-router';

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
        dispatch(setUserDetails({title:t,firstName:fname,lastName:lname,dateOfBirth:dob,houseNumber:hno,postCode:pc,employmentStatus:es,annualIncome:ai}));
        history.push({
            pathname: '/details'
          })
    }
    return (
        <div className="wrapper">
            <div className="container">
            <div className='row'>
            <div className='col-sm-5 col-xs-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='row'>
            <div className='col-12'>
            <div className="f" style={{ paddingTop: '49px', paddingLeft: '38px' }}>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group" style={{paddingRight: '200px'}}>
            <label>Title: </label>
                <select onChange={(e)=>setT(e.target.value)} title={title}>
                    <option value="Please select...">Please select...</option>
                    <option value="Mr." id ="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Miss.">Miss.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Rev">Rev</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
            <label>First name: </label>
            <input type="text" className="form-control" onChange={e=>setFname(e.target.value)} firstName={firstName}/>
            </div>
            <div className="form-group">
            <label>Last name: </label>
            <input type="text" className="form-control" onChange={e=>setLname(e.target.value)} lastName={lastName}/>
            </div>
            <div className="form-group">
            <label>Date of Birth: </label>
            <input type="date" className="form-control" onChange={e=>setDob(e.target.value)} dateOfBirth={dateOfBirth}/>
            </div>
            <div className="form-group">
            <label>House Number: </label>
            <input type="text" className="form-control" onChange={e=>setHno(e.target.value)} houseNumber={houseNumber}/>
            </div>
            <div className="form-group">
            <label>Postcode: </label>
            <input className="form-control" onChange={e=>setPc(e.target.value)} postCode={postCode}/>
            </div>
            <div className="form-group" style={{paddingRight: '200px'}}>
            <label>Employment Status: </label>
                <select  onChange={e=>setEs(e.target.value)} employmentStatus={employmentStatus}>
                    <option value="Please select...">Please select...</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Homemaker">Homemaker</option>
                </select>
            </div>
            <div className="form-group">
            <label>Annual Income: </label>
            <input className="form-control" onChange={e=>setAi(e.target.value)} annualIncome={annualIncome}/>
            </div>
            <button type="submit" className="btn btn-primary">Continue</button>
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