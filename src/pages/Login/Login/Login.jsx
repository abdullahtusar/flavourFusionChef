import React, { useContext } from 'react';
import './Login.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            });

    }
    return (
        <div className='background d-flex align-items-center'>
            <Container className='width-set mx-auto bg-light p-5 rounded bg-opacity-75'>
                <h2 className='text-center fw-bold text-secondary mb-3'>Login your account</h2>
                <hr className='text-secondary' />
                <Form onSubmit={handleLogin} className='w-100'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100 fw-bold text-secondary mt-4 btn1' type="submit">
                        Login
                    </Button>
                    <div className='mt-3 text-center'>
                        <Form.Text className='text-secondary fw-bold'>
                            Do not Have An Account ?
                            <Link className='text-danger' to="/registration"> Please Register</Link>
                        </Form.Text>
                    </div>
                    <Form.Text className='text-success'>

                    </Form.Text>
                    <Form.Text className='text-danger'>

                    </Form.Text>
                </Form>
            </Container>
            {/* <Container className='w-25 mx-auto bg-light p-5 rounded'>
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
                            <Link className='text-decoration-none text-warning' to="/registration"> Register</Link>
                        </Form.Text>
                    </div>
                    <Form.Text className='text-success'>

                    </Form.Text>
                    <Form.Text className='text-danger'>

                    </Form.Text>
                </Form>
            </Container> */}
        </div>
    );
};

export default Login;