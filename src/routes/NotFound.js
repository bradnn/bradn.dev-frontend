import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="content">
            <div class="not-found">
                <h1>404 - Page Not Found!</h1>
                <p>Sorry! We couldn't find the page you were looking for. Please check the URL or go back to the home page.</p>
            </div>
            <Link to="/" className="content-button">Go Home</Link>
        </div>
    )
}

export default Home;