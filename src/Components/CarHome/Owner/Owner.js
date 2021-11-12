import React from 'react';
import bg from './bg.jpg';


const Owner = () => {
    const backbg={
        background:`url(${bg})`,
        // height:"500px"
    }
    return (
        <div className="container my-4">
            <h2>About me(Owner)</h2>
            <div style={backbg} className="row mt-4">
                <div className="col-lg-6 p-5">
                    <img style={{width:"100%"}} className="img-fluid rounded-pill " src="https://i.ibb.co/vPRhDWk/biker-style-apr202021.jpg" alt="" />
                </div>
                <div className="col-lg-6 p-5">
                    <h2 className="text-info">Welcome to my website.explore new feature Bike.</h2>
                    <p className="text-white">Know our mission and vision. And know more about Myself</p>
                   <div className="d-flex justify-content-center">
                   <h4 className="me-3 text-info"><i class="fab fa-facebook-square"></i></h4>
                    <h4><i className="fab fa-linkedin text-info"></i></h4>
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default Owner;