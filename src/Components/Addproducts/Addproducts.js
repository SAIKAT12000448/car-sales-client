import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../Shared/Navigation';
import './Addproduct.css'
const Addproducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit =data=>{

        // send to the server
              axios.post("http://localhost:5000/addproduct",data)
              .then(res=>{
                console.log(res)
                   if(res.data.insertedId){
                       alert('added successfully');
                       reset()
                   }
               })
         
    };

    return (
        <div>
            <Navigation></Navigation>
             <h3 className="text-center my-5">Add New Products</h3>
           <div className="row text-center">
               <div className="col-md-6">
            
                <img style={{borderEndEndRadius:"60px"}} className="img-fluid" height="300px" src="https://i.ibb.co/qkvqvKd/6-69232-girl-motorcycle-bmw-r100s-hd-wallpapers-girl-bike.jpg" alt="" />


               </div>


               <div className="form col-md-6">
    <form className="form-container ms-4 p-5" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3" {...register("bikeName", )} placeholder="product Name"/>
      <textarea className="mb-3"{...register("description")} placeholder="description"/>
      <input className="mb-3"{...register("imgUrl")}placeholder="img-Url" />
     
      <input type="number" className="mb-3"{...register("price")}placeholder="price" />
      <button type="button,submit" className="btn btn-info fw-bold rounded-pill">Add</button>
      
    </form>
    </div>


           </div>
       
   
  
        </div>
        
    );
};

export default Addproducts;