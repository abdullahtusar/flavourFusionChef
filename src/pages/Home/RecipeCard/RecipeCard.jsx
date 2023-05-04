import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const RecipeCard = ({ recipe }) => {
    
    const { recipe_name, pic, ingredients, method_of_cooking, rating } = recipe;
    return (
        <div>
            <Card className='my-4 shadow'>
                <Card.Img style={{ height: "250px"}} variant="top" src={pic} />
                <Card.Body>
                    <Card.Title className='fw-bold fs-3'>{recipe_name}</Card.Title>
                    <Card.Text>
                        {
                            ingredients.map((i, index) => <li key={index}>{i}</li>)
                        }
                    </Card.Text>
                    <Card.Text>
                        {method_of_cooking}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{rating}</Card.Footer>
            </Card>   
        </div>
    );
};

export default RecipeCard;