import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <Container className='w-25 mx-auto bg-light p-5 rounded'>
            <h2 className='text-center fw-bold text-secondary mb-5'>Register your account</h2>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        onClick={handleCheck}
                        type="checkbox" 
                        name="accept" 
                        label={<>Accept <Link to="/terms">terms and conditions</Link></>} />
                </Form.Group>
                <Button className='w-100 fw-bold' disabled={!accepted} variant="secondary" type="submit">
                    Register
                </Button>
                <div className='mt-3 text-center'>
                    <Form.Text className='text-secondary fw-bold'>
                        Already Have An Account ?
                        <Link className='text-decoration-none text-warning' to="/login"> Login</Link>
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