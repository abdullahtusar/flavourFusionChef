import React, { useContext } from 'react';
import './Login.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/home';

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
                navigate(from);
            })
            .catch(error => {
                console.log(error)
            });

    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const googleUser = result.googleUser;
            console.log(googleUser);
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
                    <div className='d-flex justify-content-center pt-4'>
                        <Button onClick={handleGoogleSignIn} className='me-4 btn1'><FaGoogle className='fs-3'></FaGoogle></Button>
                        <Button className='btn1'><FaGithub className='fs-3'></FaGithub></Button>
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