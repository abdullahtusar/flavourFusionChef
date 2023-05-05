import React from 'react';
import { Card, Container, Form, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import { Button } from 'bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-secondary p-3 pt-5'>
                        <Container className='pt-3'>
                            <Container className='foot mb-3 bg-secondary border-0'>
                            <div className=''> 
                                <h2><Link className='text-decoration-none text-warning fw-bold' to="/">Flavor Fusion Chef </Link></h2>
                                <p className='text-warning'>This website features a wide range of Bangladeshi recipes, including appetizers, main dishes, desserts, and more. You can browse recipes by category, search for specific dishes, and also learn about the history and culture of Bangladeshi cuisine.</p>
                            </div>
                            <div className='text-center w-100'>
                                <p className='text-decoration-none text-warning fw-bold fs-4'>Company</p>
                                <p className='text-warning mb-1'>About us</p>
                                <p className='text-warning  mb-1'>Food</p>
                                <p className='text-warning'>Latest Menu</p>
                            </div>
                            <div className='text-center w-100'>
                                <p className='text-decoration-none text-warning fw-bold fs-4'>Social</p>
                                <div className='d-flex gap-3 justify-content-center'>
                                <p className='text-warning mb-1 fs-3'><FaFacebook></FaFacebook></p>
                                <p className='text-warning  mb-1 fs-3'><FaTwitter></FaTwitter></p>
                                <p className='text-warning  mb-1 fs-3'><FaInstagram></FaInstagram></p>
                                </div>
                            </div>
                        </Container>
                        <div className='text-light'>
                            <hr />
                        </div>
                        <div className='d-flex gap-3 justify-content-between'>
                        <p className='text-warning mb-0'><small>Copyrights Reserved For © 2023 Powered by FlavourFusionChef</small></p>
                        <p className='text-warning mb-0'><small>Powered by FlavourFusionChef</small></p>
                        </div>
                    </Container>
        </div>
    );
};

export default Footer;