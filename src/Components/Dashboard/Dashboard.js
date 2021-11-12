import React from 'react';
import { NavLink } from 'react-router-dom';

import {
   
    Switch,
    Route,

    useRouteMatch
  } from "react-router-dom";
import useAuth from '../Login/hooks/useAuth';
import Myorder from './Myorder/Myorder';
import Pay from './Pay/Pay';
import Review from './Review/Review';


const Dashboard = () => {
    const{logOut}=useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            <div className="row">
                <div style={{}} className="col-lg-3 mt-5">
                <div  class="card">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
  <li style={{backgroundColor:"rgb( 170, 106, 26,0.8)"}} className="list-group-item">
          <NavLink style={{textDecoration:"none",color:"white",}} to="/explore"><h5>Explore</h5></NavLink></li>
  <li style={{backgroundColor:"rgb(20, 83, 11,0.8)"}} className="list-group-item">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}`}><h5>MyOrder</h5></NavLink>
        </li>
        <li style={{backgroundColor:"#044908"}} className="list-group-item ">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}/review`}><h5>Review</h5></NavLink>
        </li>
        <li style={{backgroundColor:"rgb(11, 46, 83 ,0.8)"}} className="list-group-item ">
          <NavLink style={{textDecoration:"none",color:"white",}} to={`${url}/pay`}><h5>Pay</h5></NavLink>
        </li>
        <li style={{backgroundColor:"rgb( 47, 48, 161,0.8)"}} className="list-group-item ">
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
      </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;