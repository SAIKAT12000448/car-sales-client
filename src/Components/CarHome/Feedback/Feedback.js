import React, { useEffect, useState } from 'react';
import useAuth from '../../Login/hooks/useAuth';

const Feedback = () => {
    const[feedback,setfeedback]=useState([]);
    const{user}=useAuth()
    useEffect(()=>{
        fetch("https://protected-atoll-93950.herokuapp.com/review")
        .then(res=>res.json())
        .then(data=>setfeedback(data))
    })
    return (
     <div className="text-center">
         <h3 className="my-3">Review</h3>
         <div className="row row-cols-1 row-cols-md-3 g-4 ms-auto me-auto p-5">
            {
                feedback.map(fd=><div key={fd._id} class="card col text-dark bg-light p-2">
                <div class="card-header bg-dark text-white"><h5>Reviewer:{fd.name}</h5></div>
                <div class="card-body">
                  <h5 class="card-title">Title: <span className="text-success">{fd.title}</span></h5>
                  <p class="card-text">{fd.description}</p>
                  <p>Ratings:{fd.ratings}<i class="fas fa-star text-warning"></i></p>
                </div>
              </div>)
            }
       
        </div>
     </div>
    );
};

export default Feedback;