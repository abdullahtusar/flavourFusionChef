import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ChefCard = ({ chef }) => {
    const { id, chef_name, chef_pic, num_recipes, years_of_experience } = chef;
    console.log(chef_name);
    return (
        <Card className='my-4 text-center shadow'>
            <Card.Body>
                <div className='w-100 mb-2'>
                    <div className='d-flex justify-content-center'>
                        <Card.Img className='rounded-circle shadow-sm' style={{ height: "100px", width: "100px" }} src={chef_pic} />
                    </div>
                </div>
                <Card.Title className='fs-2 fw-bold'>{chef_name}</Card.Title>
                <Card.Text>
                    <h6 className='text-secondary'>Year of experiences: {years_of_experience}</h6>
                    <h6 className='text-secondary'>Number of Recipes: {num_recipes}</h6>
                </Card.Text>
                <div>
                <button className='border-0 bg-white'>
                    <div className='mb-3 text-secondary'>
                        <FaRegThumbsUp className='fs-4'></FaRegThumbsUp>
                    </div>
                </button>
                </div>
                <Button className='fw-semibold mb-4 text-secondary px-4 py-2 shadow' variant="warning">View Recipes</Button>
            </Card.Body>
        </Card>
    );
};

export default ChefCard;