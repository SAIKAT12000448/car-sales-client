import React, { useState } from 'react';

const Makeadmin = () => {
    const[email,setemail]=useState('')
    const[success,setsuccess]=useState(false)

    const handleOnblur=e=>{
        console.log(e.target.value)
        setemail(e.target.value);
    }


    const handleForm=e=>{
        console.log(e.target.value)
        const user={email}
        console.log(user)
        fetch('http://localhost:5000/users/admin',{
            method:"PUT",
            headers:{
                'content-type': "application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setemail('')
                console.log(data)
                setsuccess(true)
            }
        })
        

        e.preventDefault();
    }
    return (
        <div>
            <h3>Make a Admin</h3>
         <form onSubmit={handleForm}>
        
  <input onBlur={handleOnblur} type="email" class="form-control border border-5" id="floatingInput" placeholder="name@example.com"/>

  <button type="button,submit"className="btn btn-primary mt-2">Make Admin</button>
 
         </form>
         {
             success && <div class="alert alert-success" role="alert">
            Admin Added successfully!
           </div>
         }
        </div>
    );
};

export default Makeadmin;