import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css'

import {
   
    Switch,
    Route,

    useRouteMatch
  } from "react-router-dom";
import useAuth from '../Login/hooks/useAuth';
import Myorder from './Myorder/Myorder';
import Pay from './Pay/Pay';
import Review from './Review/Review';
import Makeadmin from './Makeadmin/Makeadmin';
import Addproducts from '../Addproducts/Addproducts'
import Manageall from './manageall/Manageall'
import Manageproducts from './Manageproducts/Manageproducts';


const Dashboard = () => {
    const{logOut,admin}=useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            <div className="row">
                <div style={{}} className="col-lg-3 mt-5">
                <div  class="card">
  <div class="card-header">
    <h4>Dashboard</h4>
  </div>
  <ul class="list-group list-group-flush">
  <li  style={{backgroundColor:"black"}} className="list-group-item">
          <NavLink style={{textDecoration:"none",color:"white",}} to="/explore"><h5>Explore</h5></NavLink></li><hr />

  <li style={{backgroundColor:"rgb(20, 83, 11,0.8)"}} className="list-group-item">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}`}><h5>MyOrder</h5></NavLink>
        </li>
        <li style={{backgroundColor:"rgba(21, 75, 34,0.7)"}} className="list-group-item ">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}/review`}><h5>Review</h5></NavLink>
        </li>
       
        {
          admin && <>
         <li  style={{backgroundColor:"rgba(21, 75, 34,0.7)"}} className="list-group-item">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}/admin`}><h5>Make Admin</h5></NavLink></li>
        <li style={{backgroundColor:"rgba(21, 75, 34,0.7)"}} className="list-group-item ">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}/addproduct`}><h5>Add products</h5></NavLink>
        </li>
        <li style={{backgroundColor:"rgba(21, 75, 34,0.7)"}} className="list-group-item ">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}/manageall`}><h5>Manage All Orders</h5></NavLink>
        </li>
        <li style={{backgroundColor:"rgba(21, 75, 34,0.7)"}} className="list-group-item ">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}/manageproducts`}><h5>Manage Products</h5></NavLink>    </li>
        </>
        }
        
    
        <li style={{backgroundColor:"rgba(11, 46, 83 ,0.8)"}} className="list-group-item ">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}/pay`}><h5>Pay</h5></NavLink>
        </li>
        <li style={{backgroundColor:"rgba( 47, 48, 161,0.9)"}} className="list-group-item ">
        <button onClick={logOut} type="button"className="btn text-white"> <i class="fas fa-sign-out-alt"></i>LogOut</button>
       
        </li>
  </ul>
</div>
                </div>
                <div className="col-lg-9 p-5">
                <Switch>
        <Route exact path={path}>
         <Myorder></Myorder>
        </Route>
        <Route path={`${path}/review`}>
         <Review></Review>
        </Route>
        <Route path={`${path}/pay`}>
         <Pay></Pay>
        </Route>
        <Route path={`${path}/admin`}>
         <Makeadmin></Makeadmin>
        </Route>
        <Route path={`${path}/addproduct`}>
         <Addproducts></Addproducts>
        </Route>
        <Route path={`${path}/manageall`}>
        <Manageall></Manageall>
        </Route>
        <Route path={`${path}/manageproducts`}>
        <Manageproducts></Manageproducts>
        </Route>
      </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;