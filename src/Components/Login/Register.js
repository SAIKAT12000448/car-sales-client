import React, { useState } from 'react';

import { NavLink,useHistory } from 'react-router-dom';

import Navigation from '../Shared/Navigation';
import useAuth from './hooks/useAuth';


const Register = () => {
    const[loginData,setLogindata]=useState({})
    const{user,registerUser,isloading,error}=useAuth();
    const history = useHistory()
    const handleOnBlur=e=>{
        const field  = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData}
        newLoginData[field]=value;
        setLogindata(newLoginData)
        console.log(loginData)
        console.log(field,value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        if(loginData.password!==loginData.password2){
            alert('Your password did not match');
        }
  
        registerUser(loginData.email,loginData.password,loginData.name,history)
    
    };
    
  
    return (
        <>
        <Navigation></Navigation>
         <div className="container">
                 <h3>Register</h3>
             <div className="row mt-5">
                 <div className="col-lg-6">
                {!isloading && <form onSubmit={handleSubmit}>
  
<input onBlur={handleOnBlur}  name="name"type="name" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Name"/>


    <input onBlur={handleOnBlur} name="email"type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Your email"/>

    <input onBlur={handleOnBlur}  name="password" type="password" className="form-control mb-3" id="exampleInputPassword1"placeholder="Your password"/>
   
    <input onBlur={handleOnBlur}  name="password2" type="password" className="form-control mb-3" id="exampleInputPassword1"placeholder="Retype Your password"/>


  <button type="submit" className="btn btn-primary">Register</button>

  <NavLink style={{textDecoration:"none"}} to="/login"><h5 className="mt-3">Already Registered?Please Login!!</h5></NavLink>
</form>}

      {
          isloading && <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }

      {
          user?.email && <div className="alert alert-success" role="alert">
       registerd successfully
        </div>
      }
      {
          error && <div className="alert alert-secondary" role="alert">
          a error occured!!unsuccessful
        </div>
      }
                 </div>
  
                 <div className="col-lg-6">
                  <img style={{height:"350px"}} className="img-fluid rounded-3" src="https://i.ibb.co/hVXQDyS/Motorcycle-repair-and-maintenance-service-concept-vector-illustration-waiting-for-checking-and-repai.jpg" alt="" />
                 </div>
  
  
             </div>
  
         </div></>
    );
};

export default Register;