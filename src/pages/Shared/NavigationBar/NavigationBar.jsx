import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" className='py-3'>
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold text-warning'>Flavor Fusion Chef</Navbar.Brand>
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
                            <Link to="/login" className='text-decoration-none me-4 text-warning fw-semibold'>
                                Login
                            </Link>
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