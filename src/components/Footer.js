import React from 'react';
import { Link } from 'react-router-dom';
import ReigsterButton from './RegisterButton';
import AccountButton from './AccountButton';

function Header(props) {

    var button;
    if (props.user.loggedIn === true) {
        button = <AccountButton />;
    } else {
        button = <ReigsterButton />;
    }


    return (
            <nav className="header">
                <div className="container">
                    <Link to="/" className="logo">bradn<sup className="sub">stats</sup></Link>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/" className="header-item">home</Link>
                                <Link to="/stats" className="header-item">player stats</Link>
                                <Link to="/leaderboards" className="header-item">leaderboards</Link>
                                {button}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Header;