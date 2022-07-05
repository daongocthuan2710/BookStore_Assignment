import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComp from './NavbarComp';
class Header extends Component {
    render() {
        return (
            <>
                {<NavbarComp/>}
            </>
        );
    }
}

export default Header;
