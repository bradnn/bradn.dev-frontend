import React from 'react';
import { Link } from 'react-router-dom';

function AccountButton() {
    return (
        <Link to="/account" className="header-button">account</Link>
    )
}

export default AccountButton;