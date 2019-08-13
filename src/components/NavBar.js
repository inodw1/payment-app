import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar style={{ backgroundColor: '#3b7bbf' }} light expand="md">
                <NavbarBrand href="/"><h5 style={{ color: '#fff' }}>Payment Module</h5></NavbarBrand>
            </Navbar>
        );
    }
}

export default NavBar;