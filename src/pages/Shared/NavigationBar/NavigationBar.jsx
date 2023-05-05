import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from './ActiveLink/ActiveLink';
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(result =>{})
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light" className='py-3'>
                <Container>
                    <Navbar.Brand className='fw-bold'><Link className='text-decoration-none text-warning' to="/">Flavor Fusion Chef </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto'>

                        </Nav>
                        <Nav>
                            <Link to="/" className='text-decoration-none me-4 text-warning fw-semibold'>
                                Home
                            </Link>
                            <Link to="/blog" className='text-decoration-none me-4 text-warning fw-semibold'>
                                Blog
                            </Link>
                            <Link to="/registration" className='text-decoration-none me-4 text-warning fw-semibold'>
                                Register
                            </Link>  
                            {
                                user && <Link className='pe-2 text-warning'>
                                    <FaUserCircle className='fs-3' />
                                </Link>
                            }
                            {
                                    user ? <Link to='/login' onClick={handleLogOut} className='text-decoration-none me-4 text-warning fw-semibold'>Logout</Link> :
                                    <Link to="/login" className='text-decoration-none me-4 text-warning fw-semibold'>
                                    Login
                                </Link>
                                }
                            {/* {
                                user && <Link href="#deets">
                                    <FaUserCircle className='fs-3' />
                                </Link>
                            }

                            {
                                user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            } */}
                        </Nav>
                        {/* <Nav className='d-flex align-items-center'>
                            {
                                user && <Nav.Link href="#deets">
                                    <FaUserCircle className='fs-3' />
                                </Nav.Link>
                            }
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                        <Link to="/login">
                                            <Button variant="secondary">Login</Button>
                                        </Link>
                                }
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;