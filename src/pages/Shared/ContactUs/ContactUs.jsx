import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div>
            <Container className='rounded mb-5'>
                <h1 className='text-center fw-bold text-secondary py-3'>Contact us</h1>
                <Row xs={1} md={2}>
                    <Col>
                        <Image style={{ height: "auto", width: "100%" }} className='rounded shadow' src='https://i.ibb.co/kXT2hyQ/2761902.jpg' />
                    </Col>
                    <Col className='my-auto'> 
                        <Form className='px-5'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Your Message" />
                            </Form.Group>
                            <Button className='btn1 text-secondary' type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;