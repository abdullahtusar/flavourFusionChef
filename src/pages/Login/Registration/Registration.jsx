import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='background d-flex align-items-center'>
            <Container className='width-set mx-auto bg-light py-3 px-5 rounded bg-opacity-75'>
            <h2 className='text-center fw-bold text-secondary mb-3'>Register your account</h2>
            <hr className='text-secondary' />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-100 fw-bold mt-3  text-secondary btn1' type="submit">
                    Register
                </Button>
                <div className='mt-3 text-center'>
                    <Form.Text className='text-secondary fw-bold'>
                        Already Have An Account ?
                        <Link className='text-danger' to="/login"> Please Login</Link>
                    </Form.Text>
                </div>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
        </Container>
        </div>
    );
};

export default Registration;