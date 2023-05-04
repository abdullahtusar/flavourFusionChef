import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Chefs.css'

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])
    console.log(chefs)
    const { id, chef_name, chef_pic, num_recipes, years_of_experiences } = chefs;
    return (
        <Container className='mt-5'>
            <h1 className='text-center fw-bold'>Our Master Chefs</h1>
            <Container className='cards mt-3 mb-5'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </Container>

            {/* <Container>
                <Row className="g-4 mb-4">
                    <Col className='d-flex gap-4'>
                        {
                            chefs.map(chef => <ChefCard
                                key={chef.id}
                                chef={chef}
                            ></ChefCard>)
                        }
                    </Col>
                </Row>
            </Container>
            <div className='d-flex gap-4 my-5'>

            </div> */}
        </Container>
    );
};

export default Chefs;