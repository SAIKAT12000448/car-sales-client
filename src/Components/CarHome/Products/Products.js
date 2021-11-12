import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Products = () => {
    const[service,setService]=useState([])
    
useEffect(()=>{
    fetch('http://localhost:5000/explore')
    .then(res=>res.json())
    .then(data=>setService(data))
},[])
    return (
        <div className="container mt-5">
            <h3 className="mt-5">Products</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
           {
              service.slice(0,6).map(product=>
              <div key={product._id} className="col">
                <div className="card h-100 p-3">
                  <img style={{height:"400px"}} src={product.imgUrl} className="card-img-top" alt="..."/>
                  <div style={{height:"200px"}} className="card-body">
                    <h5 className="card-title">{product.bikeName}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <NavLink to={`/purchase/${product._id}`}><button type="btn"className="btn bg-warning">Purchase</button></NavLink>
                  </div>
               
              </div>)
           }
        
        </div>
            
        </div>
    );
};

export default Products;