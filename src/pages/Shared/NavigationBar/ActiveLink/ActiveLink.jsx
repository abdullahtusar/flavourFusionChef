import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';
const ActiveLink = ({to, children}) => {
    return (
        <NavLink 
         to={to}  
         className={({isActive}) =>
            isActive ? "active text-decoration-none me-4 fw-bold" : 
            "text-decoration-none me-4 text-warning fw-bold"
        }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;