import React from 'react';
import { NavLink } from 'react-router-dom';
import honda from './honda.jpg'

const bannerbg={
    background:`url(${honda})`,
    backgroundColor:"rgb(28, 28, 28 ,0.9)",
    backgroundBlendMode:'darken, luminosity',
    height:"550px"

}
const styleimg={
    borderRadius:"100px",
    
}


const Banner = () => {
    return (
      <div style={bannerbg} className="mb-5" >
          <div class="row">
    <div class="col-lg-6">
            <h2 className="text-white mt-5">Discover Brand Motobike - Compare And Save! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily. Types: Products Online, Instant Results, Garrenty,Warrenty.</h2>
            <NavLink to="/explore"><button style={{backgroundColor:'#D2CE87',padding:"10px",borderEndEndRadius:'30px'}} type="button" className="btn mt-3"><h4>Explore</h4></button></NavLink>
    </div>
    <div class="col-lg-6">
        <img style={styleimg} className="img-fluid mt-3" src="https://i.ibb.co/PjHC3wH/Attractive-sales-woman-helping-customer-which-motorcycle-to-buy.jpg" alt="" />

    </div>
  </div>
      </div>
    );
};

export default Banner;