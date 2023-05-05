import React, { useContext } from 'react';
import { Button, Container, Image, Nav, NavLink, Navbar } from 'react-bootstrap';
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
                        <Nav className='d-flex align-items-center'>
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
                                user ? <button className='border-0 bg-secondary' onClick={handleLogOut}><ActiveLink to='/login' className='text-decoration-none me-4 text-warning fw-semibold'>Logout</ActiveLink></button> :
                                    <ActiveLink to="/login" className='text-decoration-none me-4 text-warning fw-semibold'>
                                        Login
                                    </ActiveLink>
                            }
                            {
                                user && <ActiveLink className='pe-2 text-warning'>
                                    <Image style={{height:"50px", width:"50px"}} title={user.displayName} className='rounded-circle' src={user.photoURL}/>
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