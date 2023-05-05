import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='background'>
            <Container className='py-5'>
                <Card className='px-3 mb-4'>
                    <Card.Body>
                        <h3 className='fw-bold mb-4'>What are the differences between uncontrolled and controlled components?</h3>
                        <p className='text-secondary fw-semibold'><FaArrowRight className='text-warning fs-3'></FaArrowRight> Uncontrolled components are controlled by the DOM and do not have their own state, while controlled components have their own state and are controlled by React through their props. This means that changes to uncontrolled components are handled directly by the DOM, while changes to controlled components are handled by React and trigger re-renders of the component.</p>
                    </Card.Body>
                </Card>
                <Card className='px-3 mb-4'>
                    <Card.Body>
                        <h3 className='fw-bold mb-4'>How to validate React props using PropTypes?</h3>
                        <p className='text-secondary fw-semibold'><FaArrowRight className='text-warning fs-3'></FaArrowRight> To validate React props using PropTypes, you need to import PropTypes from the prop-types package and define propTypes as a static property of your component. Within propTypes, you can define the expected type and shape of each prop by using the various PropTypes validators available in the PropTypes package. When a prop of the wrong type or shape is passed to your component, PropTypes will throw a warning in the console to help you identify the issue.</p>
                    </Card.Body>
                </Card>
                <Card className='px-3 mb-4'>
                    <Card.Body>
                        <h3 className='fw-bold mb-4'>What are the difference between nodejs and express js.</h3>
                        <p className='text-secondary fw-semibold'><FaArrowRight className='text-warning fs-3'></FaArrowRight> Node.js is a runtime environment that allows developers to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of features and tools for building web applications.</p>
                    </Card.Body>
                </Card>
                <Card className='px-3 mb-4'>
                    <Card.Body>
                        <h3 className='fw-bold mb-4'>What is a custom hook, and why will you create a custom hook?</h3>
                        <p className='text-secondary fw-semibold'><FaArrowRight className='text-warning fs-3'></FaArrowRight> A custom hook in React is a reusable function that encapsulates common logic and state in a single place, which can be shared across multiple components in an application. Custom hooks follow the same rules as React hooks, which means they can use other hooks, but must start with the prefix "use" and follow the React Hook Rules.</p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Blog;