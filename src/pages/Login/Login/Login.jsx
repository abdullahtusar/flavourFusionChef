import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Container className='w-25 mx-auto bg-light p-5 rounded'>
                <h2 className='text-center fw-bold text-secondary mb-5'>Login your account</h2>
                <hr className='text-secondary' />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100 fw-bold' variant="secondary" type="submit">
                        Login
                    </Button>
                    <div className='mt-3 text-center'>
                        <Form.Text className='text-secondary fw-bold'>
                            Do not Have An Account ?
                            <Link className='text-decoration-none text-warning' to="/register"> Register</Link>
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

export default Login;