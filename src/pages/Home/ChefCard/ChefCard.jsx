import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import './ChefCard.css'
const ChefCard = ({ chef }) => {
    const { id, chef_name, chef_pic, num_recipes, years_of_experience, likes } = chef;
    return (
        <Card className='my-4 text-center shadow'>
            <Card.Body>
                <div className='w-100 mb-2'>
                    <div className='d-flex justify-content-center py-4'>
                        <LazyLoad>
                            <Card.Img className='rounded-circle shadow-sm' style={{ height: "100px", width: "100px" }} src={chef_pic} />
                        </LazyLoad>
                    </div>
                </div>
                <Card.Title className='fs-2 fw-bold'>{chef_name}</Card.Title>
                <Card.Text className='text-secondary'>Year of experiences: {years_of_experience}</Card.Text>
                <Card.Text className='text-secondary'>Number of Recipes: {num_recipes}</Card.Text>
                <div>
                    <Button className='mb-3 bg-light' variant='outline-warning'>
                        <div className='text-secondary d-flex align-items-center'>
                            <FaRegThumbsUp className='fs-5'>  </FaRegThumbsUp>
                            <span className='ps-1'>{likes}</span>
                        </div>
                    </Button>
                </div>
                <Link to={`/chef/${chef.id}`}>
                    <Button className='btn1 fw-semibold mb-4 text-secondary px-4 py-2 shadow'>View Recipes</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ChefCard;