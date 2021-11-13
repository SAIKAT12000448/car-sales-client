import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Shared/Navigation';

const Explore = () => {
    const[products,setProducts]=useState([])
    
    useEffect(()=>{
        fetch('https://protected-atoll-93950.herokuapp.com/explore')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <>
        <Navigation></Navigation>
        <div className="container mt-3">
            
            <h1 className="my-3">Our all Products Item</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
           {
              products.map(product=>
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
        </>
    );
};

export default Explore;