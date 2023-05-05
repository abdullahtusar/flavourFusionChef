import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Chefs.css'
import AboutUs from '../../Shared/AboutUs/AboutUs';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-abdullahtusa-abdullahtusar.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <Container className='mt-5'>
            <h1 className='text-center fw-bold text-secondary'>Our Master Chefs</h1>
            <Container className='cards mt-3 mb-5'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </Container>
            <AboutUs></AboutUs>
        </Container>
    );
};

export default Chefs;