import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Login/hooks/useAuth';

const Review = () => {
    const { register, handleSubmit,reset } = useForm();
    const{user}=useAuth();


    const onSubmit=data=>{
            // send to the server
            axios.post("http://localhost:5000/review",data)
            .then(res=>{
              console.log(res)
                 if(res.data.insertedId){
                     alert('added successfully');
                     reset()
                 }
             })
    }
    return (
        <div>
            <h2>hey!!<span className="text-danger">{user.displayName} </span>please Review the Order!!</h2>
           <div className="">
           <form className="form-container ms-4 p-5 d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} className="mb-3" {...register("name", )} placeholder="your name"/>
      <input className="mb-3" {...register("title", )} placeholder="title of review"/>
      <textarea className="mb-3"{...register("description")} placeholder="write something about our product"/>
    
     
      <input min="1"max="5" type="number" className="mb-3"{...register("ratings")}placeholder="ratings between 0-5" />
      <button type="button,submit" className="btn btn-info fw-bold rounded-pill">review</button>
      
    </form>
           </div>
        </div>
    );
};

export default Review;