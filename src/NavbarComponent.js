import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">CRUD REACT JS</Navbar.Brand>
            </div>
        </Navbar>
    );
};

export default NavbarComponent;
