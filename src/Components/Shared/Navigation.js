import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../Login/hooks/useFirebase';

const Navigation = () => {
  const {user,logOut}=useFirebase()
    return (
        <div>
            <nav style={{backgroundColor:"#DCD9AB"}} className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-lg-5">
        <NavLink className="" style={{textDecoration:"none",color:'Black'}} to="/home"><h5>
              Home</h5></NavLink>
        </li>
        <li className="nav-item me-lg-5">
        <NavLink className="" style={{textDecoration:"none",color:'Black'}} to="/explore"><h5>
              Explore</h5></NavLink>
        </li>
      
      { user.email && <li className="nav-item me-lg-5">
        <NavLink className="" style={{textDecoration:"none",color:'Black'}} to="/dashboard"><h5>
              Dashboard</h5></NavLink>
        </li>}
        {
          user.email && <li className="nav-item me-lg-5">
            <h5 className="text-success">{user.displayName}</h5>
          </li>
        }
        <li className="nav-item">
          {user.email?<button onClick={logOut} type="button" className="btn"><h5>Logout</h5></button>:
          <NavLink className="" style={{textDecoration:"none",color:'Black'}} to="/login"><h5>
              Login</h5></NavLink>
              }
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;