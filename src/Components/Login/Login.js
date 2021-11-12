import React, { useState } from 'react';
import { NavLink ,useLocation,useHistory} from 'react-router-dom';
import Navigation from '../Shared/Navigation';
import useAuth from './hooks/useAuth';


const Login = () => {
  const[loginData,setLogindata]=useState({})
  const{user,login,error,isloading}=useAuth();

  
const location=useLocation()
const history = useHistory();

  const handleOnBlur=e=>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData ={...loginData}
    newLoginData[field]=value;
    setLogindata(newLoginData)

  }

  const handleOnSubmit=e=>{
    e.preventDefault();
          
    login(loginData.email,loginData.password,location,history)
  }


    return (
      <>
      <Navigation></Navigation>
       <div className="container">
         <h3>Login</h3>
           <div className="row mt-5">
               <div className="col-lg-6 p-5">
              {!isloading && <form onSubmit={handleOnSubmit}>
                
    <input onBlur={handleOnBlur} name="email"type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Your email"/>

<input onBlur={handleOnBlur}  name="password" type="password" className="form-control mb-3" id="exampleInputPassword1"placeholder="Your password"/>

<button type="submit" className="btn btn-primary">Login</button>


<NavLink style={{textDecoration:"none"}} to="/register"><h5 className="mt-3">New user?please Register!</h5></NavLink>
{
  isloading && <div className="spinner-border text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
}

{
          user?.email && <div className="alert alert-success" role="alert">
       logged in successfully
        </div>
      }
      {
          error && <div className="alert alert-secondary" role="alert">
          a error occured!!unsuccessful
        </div>
      }

              </form>}
               </div>

               <div className="col-lg-6">
                <img style={{height:"350px"}} className="img-fluid rounded-3" src="https://i.ibb.co/hVXQDyS/Motorcycle-repair-and-maintenance-service-concept-vector-illustration-waiting-for-checking-and-repai.jpg" alt="" />
               </div>


           </div>

       </div></>
    );
};

export default Login;