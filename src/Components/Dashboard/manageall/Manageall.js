import React, { useEffect, useState } from 'react';

const Manageall = () => {
    const[manage,setmanage]=useState([])
    const [control,setControl]=useState(false)
    useEffect(()=>{
        fetch('https://protected-atoll-93950.herokuapp.com/manageorder')
        .then(res=>res.json())
        .then(data=>setmanage(data))
    },[control])

    const handlemanageDelete=(id)=>{

console.log("click")
fetch(`https://protected-atoll-93950.herokuapp.com/deletorder/${id}`,{
    method: "DELETE",
    headers: { "content-type": "application/json" },
  })
  .then(res=>res.json())
  .then(data=>{
    if (data.deletedCount) {
        setControl(!control);
        window.confirm('are you sure!')
      } else {
        setControl(false);
      }
  })

    }
    return (
        <div>
            <h3>Manage All Orders</h3>
            <div>
          

           <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Bikename</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">Address</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
        manage.map(order=>
            <tr>
            <th scope="row">#</th>
            <td>{order.Bikename}</td>
            <td>{order.customerName}</td>
            <td>{order.email}</td>
            <td>{order.address}</td>
            <td>{order.price}</td>
           <td><button onClick={()=>handlemanageDelete(order._id)} type="button" class="btn btn-dark">Delete</button></td> 
          </tr>
      
     
          )
    }
  
  </tbody>
</table>
        </div>
        </div>
    );
};

export default Manageall;