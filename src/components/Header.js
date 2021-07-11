import React from 'react';
import { Link } from 'react-router-dom';
import ReigsterButton from './RegisterButton';
import AccountButton from './AccountButton';

import Menu from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import Person from '@material-ui/icons/Person';

function Header(props) {

    function toggleMobileMenu() {
        console.log('click');
        var element = document.getElementById("mobile-pop")
        var isShowing = element.style.display;
        console.log(isShowing);
        if (isShowing === "flex") {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    }

    var button;
    if (props.user.loggedIn === true) {
        button = <AccountButton />;
    } else {
        button = <ReigsterButton />;
    }
    var mobileButton;
    if (props.user.loggedIn === true) {
        mobileButton = <Link to="/account" className="header-item" onClick={toggleMobileMenu}><Person /> account</Link>
    } else {
        mobileButton = <><Link to="/register" className="header-item" onClick={toggleMobileMenu}><Person /> register</Link><Link to="/login" className="header-item" onClick={toggleMobileMenu}><Person /> login</Link></>
    }


    return (
            <nav className="header">
                <div className="container">
                    <Link to="/" className="logo">bradn<sup className="sub">stats</sup></Link>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/" className="header-item">home</Link>
                                <Link to="/players" className="header-item">players</Link>
                                {button}
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu">
                        <Menu onClick={toggleMobileMenu} />
                        <div id="mobile-pop">
                        <ul>
                            <li>
                                <Link to="/" className="header-item" onClick={toggleMobileMenu}><Home />  home</Link>
                                <Link to="/players" className="header-item" onClick={toggleMobileMenu}><People /> players</Link>
                                {mobileButton}
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Header;