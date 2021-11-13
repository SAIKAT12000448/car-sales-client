import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Manageproducts = () => {
    const[products,setproducts]=useState([])
    const[control,setControl]=useState(false)
    
    useEffect(()=>{
        fetch('http://localhost:5000/explore')
        .then(res=>res.json())
        .then(data=>{
            
            setproducts(data)
        })
    },[control])

    const handleDelete=id=>{
        fetch(`http://localhost:5000/explore/${id}`,{
    method: "DELETE",
    headers: { "content-type": "application/json" },
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
    if (data.deletedCount) {
        setControl(!control);
        window.confirm('are you sure!')
      } else {
        setControl(false);
      }
  })
console.log(id)

    }
                  
    
    return (
        <div>
            <h2>manage products</h2>
            <div className="container mt-5">
           
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
           {
              products.map(product=>
              <div key={product._id} className="col">
                <div className="card h-100 p-3">
                  <img style={{height:"300px"}} src={product.imgUrl} className="card-img-top" alt="..."/>
                  <div style={{}} className="card-body">
                    
                    <h5 className="card-title">{product.bikeName}</h5>
                  
                  </div>
                 <button onClick={()=>handleDelete(product._id)} type="button"className="btn btn-danger">Delete</button>
                  </div>
               
              </div>)
           }
        
        </div>
            
        </div>
        </div>
    );

        };
export default Manageproducts;