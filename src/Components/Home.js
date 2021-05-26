import React from 'react';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useHistory } from 'react-router'
import { setUserDetails } from './UserSlice'
import Select from './Select'
import Input from './Input'

function Home() {
    const dispatch=useDispatch()
    const history=useHistory()

    const formik=useFormik({
        initialValues:{
            title:useSelector(state=>state.user.title),
            firstName:useSelector(state=>state.user.firstName),
            lastName:useSelector(state=>state.user.lastName),
            dateOfBirth:useSelector(state=>state.user.dateOfBirth),
            houseNumber:useSelector(state=>state.user.houseNumber),
            postCode:useSelector(state=>state.user.postCode),
            employmentStatus:useSelector(state=>state.user.employmentStatus),
            annualIncome:useSelector(state=>state.user.annualIncome)
        },
        onSubmit:(e)=>{
            dispatch(setUserDetails(formik.values))
            history.push({
              pathname: '/details'
            })
        },
        validate:values=>{
            let errors={}
            if(!values.title)
                errors.title='Please enter Title'
            if(!values.firstName)
                errors.firstName='Please enter First name'
            if(!values.lastName)
                errors.lastName='Please enter Last name'
            if(!values.dateOfBirth)
                errors.dateOfBirth='Please enter Date of Birth'
            if(!values.houseNumber)
                errors.houseNumber='Please enter House Number'
            if(!values.postCode)
                errors.postCode='Please enter Postcode'
            if(!values.employmentStatus)
                errors.employmentStatus='Please enter Employment Status'
            if(!values.annualIncome)
                errors.annualIncome='Please enter Annual Income'
            return errors
        }
    })
    return (
        <div className="wrapper">
            <div className="container">
            <div className='row'>
            <div className='col-sm-5 col-xs-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='row'>
            <div className='col-12'>
            <div className="f" style={{ padding:'20px 38px'}}>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <Select id="title" name="title" type="Title" labelName="Title" className="form-control-d" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}/>
                    {formik.touched.title && formik.errors.title ? (<div className="error">{formik.errors.title}</div>) : null}
                </div>
                <div className="form-group">
                    <Input id="firstName" name="firstName" type="text" labelName="First name" className="form-control-i" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/>
                    {formik.touched.firstName && formik.errors.firstName ? (<div className="error">{formik.errors.firstName}</div>) : null}
                </div>
                <div className="form-group">
                    <Input id="lastName" name="lastName" type="text" labelName="Last name" className="form-control-i" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}/>
                    {formik.touched.lastName && formik.errors.lastName ? (<div className="error">{formik.errors.lastName}</div>) : null}
                </div>
                <div className="form-group">
                    <Input id="dateOfBirth" name="dateOfBirth" type="date" labelName="Date of Birth" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dateOfBirth}/>
                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (<div className="error">{formik.errors.dateOfBirth}</div>) : null}
                </div>
                <div className="form-group">
                    <Input id="houseNumber" name="houseNumber" type="text" labelName="House Number" className="form-control-i" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.houseNumber}/>
                    {formik.touched.houseNumber && formik.errors.houseNumber ? (<div className="error">{formik.errors.houseNumber}</div>) : null}
                </div>
                <div className="form-group">
                    <Input id="postCode" name="postCode" type="text" labelName="Postcode" className="form-control-i" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postCode}/>
                    {formik.touched.postCode && formik.errors.postCode ? (<div className="error">{formik.errors.postCode}</div>) : null}
                </div>
                <div className="form-group">
                    <Select id="employmentStatus" name="employmentStatus" type="Employment Status" labelName="Employment Status" className="form-control-d" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.employmentStatus}/>
                    {formik.touched.employmentStatus && formik.errors.employmentStatus ? (<div className="error">{formik.errors.employmentStatus}</div>) : null}
                </div>
                <div className="form-group">
                    <Input id="annualIncome" name="annualIncome" type="text" labelName="Annual Income" className="form-control-i" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.annualIncome}/>
                    {formik.touched.annualIncome && formik.errors.annualIncome ? (<div className="error">{formik.errors.annualIncome}</div>) : null}
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