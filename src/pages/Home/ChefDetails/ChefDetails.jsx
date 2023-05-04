import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';

const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    const { id, chef_name, chef_pic, num_recipes, years_of_experience, description, recipe_id } = chef;
    return (
        <div>
            <div>
                <h1 className='fw-bold text-center my-4 text-secondary'>Most Valuable Chef</h1>
            </div>
            <Container className='rounded mb-5'>
                <Row xs={1} md={2}>
                    <Col>
                        <Image style={{ height: "auto", width: "100%" }} className='rounded shadow' src={chef_pic} />
                    </Col>
                    <Col className='my-auto pt-3 ps-5'>
                        <h1 className='fw-bold'>{chef_name}</h1>
                        <p className='text-secondary'>{description}</p>
                        <div>
                            <button className='border-0 bg-white'>
                                <div className='mb-3 text-secondary'>
                                    <FaRegThumbsUp className='fs-4'></FaRegThumbsUp>
                                </div>
                            </button>
                        </div>
                        <p><b>Number of Recipes:</b> {num_recipes}</p>
                        <p><b>Year of Experiences:</b> {years_of_experience}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChefDetails;