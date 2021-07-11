import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlayerNotFound extends Component {
    render() {
        return (
            <div className="not-found">
            <h1>Player not found.</h1>
            <p>We couldn't find the player you were looking for. Please check the spelling of the username.</p>
            <Link to="/" className="content-button">Go Home</Link>
            </div>
        )
    }
}

export default PlayerNotFound;