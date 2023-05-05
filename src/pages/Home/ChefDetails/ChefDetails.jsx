import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefDetails = () => {
    const chef = useLoaderData();
    const { id, chef_name, chef_pic, num_recipes, years_of_experience, description, recipes, likes } = chef;
    return (
        <div>
            <Container className=''>
                <h1 className='fw-bold rounded shadow text-center my-4 text-secondary bg-warning p-3'>Most Valuable Chef</h1>
            </Container>
            <Container className='rounded mb-5'>
                <Row xs={1} md={2}>
                    <Col>
                        <Image style={{ height: "auto", width: "100%" }} className='rounded shadow' src={chef_pic} />
                    </Col>
                    <Col className='my-auto pt-3 ps-5'>
                        <h1 className='fw-bold'>{chef_name}</h1>
                        <p className='text-secondary'>{description}</p>
                        <div>
                            <Button className='mb-3 bg-light' variant='outline-warning'>
                                <div className='text-secondary d-flex align-items-center'>
                                    <FaRegThumbsUp className='fs-5'>  </FaRegThumbsUp>
                                    <span className='ps-1'>{likes}</span>
                                </div>
                            </Button>
                        </div>
                        <p><b>Number of Recipes:</b> {num_recipes}</p>
                        <p><b>Year of Experiences:</b> {years_of_experience}</p>
                    </Col>
                </Row>
            </Container>
            <Container className=''>
                <h1 className='fw-bold rounded shadow text-center my-4 text-secondary bg-warning p-3'>Recipes</h1>
            </Container>
            <Container className='cards' style={{ height: "auto" }}>
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.recipe_name}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </Container>
        </div>
    );
};

export default ChefDetails;