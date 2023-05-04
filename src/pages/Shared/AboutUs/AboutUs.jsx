import React from 'react';
import './AboutUs.css'
import { Card, Col, Collapse, Container, Image, Row } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <Container className='rounded mb-5'>
            <Row xs={1} md={2}>
                <Col>
                    <h1 className='text-center fw-bold mt-5 mb-3'>Who We Are ?</h1>
                    <p className='text-secondary text-center'>This website features a wide range of Bangladeshi recipes, including appetizers, main dishes, desserts, and more. You can browse recipes by category, search for specific dishes, and also learn about the history and culture of Bangladeshi cuisine.Bangladeshi cuisine and offers a variety of recipes from different regions of Bangladesh. You can search for recipes by category or by region, and also find cooking tips and techniques.This website offers a wide range of Bangladeshi recipes, including vegetarian and non-vegetarian dishes, desserts, and more. You can search for recipes by category or by ingredients, and also find cooking videos and tutorials.</p>
                </Col>
                <Col>
                    <Image style={{height:"auto", width:"100%"}} className='rounded shadow' src='https://i.ibb.co/fXQSfPQ/top-view-assortment-delicious-poke-bowl.jpg'/>
                </Col>
            </Row>
        </Container>

    );
};

export default AboutUs;