import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import background from '../../assets/background.png';
import logo from './../../assets/logo.png';

const Navbars = () => {
    return (
        <>

            <Navbar style={{
                backgroundImage: `url(${background})`,
            }} expand="lg">

                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" style={{ width: "30px", margin: 0, }} />
                    <span style={{ color: "blue", fontWeight: "600" }}>Elevate Collaboration</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="product" style={{ color: "blue", fontWeight: "500" }}>Product</Nav.Link>
                        <Nav.Link href="solutions" style={{ color: "blue", fontWeight: "500" }}>Solutions</Nav.Link>
                        <Nav.Link href="about" style={{ color: "blue", fontWeight: "500" }}>About</Nav.Link>
                    </Nav>
                    <Nav className="mr-right" >
                        <Nav.Link href="contact" style={{ color: "blue", fontWeight: "500" }}>Contact Us</Nav.Link>
                        <Nav.Link href="login" style={{ color: "blue", fontWeight: "500" }}>Log In</Nav.Link>
                        <Nav.Link href="signup"
                            style={{
                                color: "white",
                                backgroundColor: "#2F53D3",
                                borderRadius: "25px",
                                width: "100px",
                                fontWeight: "600",
                                textAlign: "center"
                            }}>Sign Up</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navbars
