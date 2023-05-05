import React, { useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
    
    const { recipe_name, pic, ingredients, method_of_cooking, rating } = recipe;

    const [clicked, setClicked] = useState(true);
    const addFavour = () =>{
        toast('Add to favourite');
        setClicked(false);
    }
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
                <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1'>
                    <Rating
                      placeholderRating={rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating><span className='d-flex'>
                        Rating: <span className='ps-2'>  {rating}</span>
                    </span>
                </div>
                <div>
                    <Button disabled={!clicked} onClick={addFavour} className='bg-light border-0'> 
                        {
                            clicked ? <FaRegHeart className='fs-5 text-danger'></FaRegHeart> : 
                            <FaHeart className='fs-5 text-danger'></FaHeart>
                        }
                        
                    </Button>
                    {/* <Button className='mb-3 bg-light' variant='outline-warning'>
                        <FaHeart></FaHeart>
                    </Button> */}
                </div>
                </Card.Footer>
                <ToastContainer/>
            </Card> 
        </div>
    );
};

export default RecipeCard;