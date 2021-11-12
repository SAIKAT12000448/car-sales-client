import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
                <footer className='bg-color'>
            <div className='container '>
               
                <div className='row g-3 mt-5 p-5'>
                    <div className='col-md-4'>
                        
                        <br />
                        <div className='icon'>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                        </div>
                        <div className='mt-5'>
                            <small className="text-white">© All rights reserved.</small>
                            <br />
                          
                        </div>
                    </div>
                    <div className='col-md-3 footer-option'>
                        <h3 className="text-white">Menu</h3>
                        <p className='text-secondary' ><a href="/home">Home</a></p>
                        <p className='text-secondary' ><a href="/about">About us</a></p>
                        <p className='text-secondary' ><a href="/">Contact us</a></p>
                    </div>
                    <div className='col-md-5 text-white'>
                        <h2 className="text-info">Our contactNumber and Main office</h2>
                        <h3 className='mt-3'> <small className='text-white'>+1 2 983 433 73 10</small></h3>
                        <h3>
                            <div>
                            <i className="fas fa-search-location"></i> &nbsp;
                                <small style={{ fontWeight: '100', fontSize: '15px' }}>
                                   Chandina,Cumilla,1203</small>
                            </div>
                        </h3>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;