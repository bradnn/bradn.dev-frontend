import React from 'react';
import { Link } from 'react-router-dom';

function RegisterButton() {
    return (
        <>
        <Link to="/login" className="header-item">login</Link>
            <Link to="/register" className="header-button">register</Link>
        </>
    )
}

export default RegisterButton;