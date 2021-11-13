import React, { useEffect, useState } from 'react';
import useAuth from '../../Login/hooks/useAuth';

const Myorder = () => {
    const[myorder,setMyorder]=useState([])
    const [control, setConrol] = useState(false);
    const{user}=useAuth()
    useEffect(()=>{
        fetch(`https://protected-atoll-93950.herokuapp.com/myorder?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyorder(data))
    },[control])

    const handleDelete=id=>{
        fetch(`https://protected-atoll-93950.herokuapp.com/deletorder/${id}`,{
            method: "DELETE",
            headers: { "content-type": "application/json" },
          })
          .then(res=>res.json())
          .then(data=>{
            if (data.deletedCount) {
                setConrol(!control);
                window.confirm('are you sure!')
              } else {
                setConrol(false);
              }
          })
    }
    
    return (
        <div>
           <h2>MyOrder</h2>

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
        myorder.map(order=>
            <tr>
            <th scope="row">#</th>
            <td>{order.Bikename}</td>
            <td>{order.customerName}</td>
            <td>{order.email}</td>
            <td>{order.address}</td>
            <td>{order.price}</td>
           <td><button onClick={()=>handleDelete(order._id)} type="button" class="btn btn-dark">Delete</button></td> 
          </tr>
      
     
          )
    }
  
  </tbody>
</table>
        </div>
    );
};

export default Myorder;