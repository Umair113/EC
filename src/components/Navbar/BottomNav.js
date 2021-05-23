import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Navbars = () => {
    return (
        <>
            <Navbar style={{
                textAlign: "center"
            }} expand="lg">

                <Nav style={{
                    margin: "0 auto",
                    padding: "2%"
                }} >
                    <Nav.Link href="/" style={{ color: "blue", fontWeight: "500" }}>Goto Homepage</Nav.Link>
                    <Nav.Link href="about" style={{ color: "blue", fontWeight: "500" }}>About Us</Nav.Link>
                    <Nav.Link href="contact" style={{ color: "blue", fontWeight: "500" }}>Contact</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navbars
