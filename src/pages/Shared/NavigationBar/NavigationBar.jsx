import React, { useContext } from 'react';
import { Button, Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from './ActiveLink/ActiveLink';
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
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
                        <Nav className='me-auto'></Nav>
                        <Nav>
                            <ActiveLink to="/home" >
                                Home
                            </ActiveLink>
                            <ActiveLink to="/blog" className='text-decoration-none me-4 text-warning fw-semibold'>
                                Blog
                            </ActiveLink>
                            <ActiveLink to="/registration" className='text-decoration-none me-4 text-warning fw-semibold'>
                                Register
                            </ActiveLink>
                            {
                                user && <ActiveLink className='pe-2 text-warning'>
                                    <FaUserCircle className='fs-3' />
                                </ActiveLink>
                            }
                            {
                                user ? <button className='border-0 bg-secondary' onClick={handleLogOut}><ActiveLink to='/login' className='text-decoration-none me-4 text-warning fw-semibold'>Logout</ActiveLink></button> :
                                    <ActiveLink to="/login" className='text-decoration-none me-4 text-warning fw-semibold'>
                                        Login
                                    </ActiveLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;