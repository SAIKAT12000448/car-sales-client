
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Login/hooks/useAuth';
import Navigation from '../../Shared/Navigation';

const Purchase = () => {


    const{perid}=useParams();
    const{user,isloading}=useAuth()
    const[getpurchase,setPurchase]=useState({})
    const{bikeName,price}=getpurchase;
    const initialInfo={customerName:user.displayName,email:user.email,phone:''}
    const[bookInfo,setbookInfo]=useState(initialInfo)
  
    useEffect(()=>{
        fetch(`http://localhost:5000/purchase/${perid}`)
        .then(res=>res.json())
        .then(data=>setPurchase(data))
    },[])

const handleFormSubmit=e=>{
    const alldetail={
        ...bookInfo,
        Bikename:bikeName,
        price:price
        
    }

    //  send to the server
     fetch('http://localhost:5000/placeorder',{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body: JSON.stringify(alldetail)
      })
      .then(res=>res.json())
      .then(data=>{
       alert('Ordered Success')
       console.log(data)
      })

      e.preventDefault()

}



    const handleform=(e)=>{
        const field = e.target.name;
        const value=e.target.value;
        const newinfo={...bookInfo}
        newinfo[field]=value;
        setbookInfo(newinfo)
       console.log(newinfo)

    }

    return (
        <div>
            {/* style="max-width: 540px;" */}
            <Navigation></Navigation>
            <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{height:"400px"}} src={getpurchase.imgUrl} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{bikeName}</h5>
        <p className="card-text">{getpurchase.description}</p>
        <h5 className="card-title">price:{getpurchase.price}$</h5>
      
      </div>

    { !isloading && <form onSubmit={handleFormSubmit}>
      <div class="row p-5 g-4">
  <div class="col-sm-6">
    <input disabled defaultValue={getpurchase.bikeName} type="text" class="form-control" placeholder="bike name" aria-label="First name"/>


    <input name='email' onBlur={handleform} defaultValue={user.email} type="email" class="form-control mt-3" placeholder="email" aria-label="email"/>

    <input name="name" onBlur={handleform} defaultValue={user.displayName} type="username" class="form-control mt-3" placeholder="" aria-label="email"/>

  </div>
  <div class="col-sm-6">
    <input name="address" onBlur={handleform} type="adress" class="form-control" placeholder="address" aria-label="email"/>

    <input name="phone" onBlur={handleform} type="number" class="form-control mt-3" placeholder="phonenumber" aria-label="number"/>

    <input disabled defaultValue={price} type="text" class="form-control mt-3" placeholder="" aria-label="email"/>

  </div>
  <button type="submit"className="btn btn-info"><h5>Place Order</h5></button>
</div>
      </form>}
      {
          isloading && <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }



    </div>
  </div>
</div>
        </div>
    );
};

export default Purchase;