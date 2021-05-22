import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo from './../../assets/logo.png';
import call from './../../assets/call.png';
import mail from './../../assets/mail.png';
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.secondMain}>

                    <img src={logo} alt="logo" style={{ width: "30px", margin: 0, }} />
                    <span style={{ color: "#0078E7", fontWeight: "600", fontSize: "1.5vw" }}>Elevate Collaboration</span>

                    <Container>
                        {/* Stack the columns on mobile by making one full-width and the other half-width */}
                        <Row>
                            <Col xs={12} md={4}>
                                <div>
                                    <h4 className={styles.headings}>Links</h4>
                                    <p style={{ marginTop: "3vw" }}>
                                        <a>
                                            <Link to="/" className={styles.links}>Home</Link><br />
                                            <Link to="product" className={styles.links}>Product</Link><br />
                                            <Link to="solutions" className={styles.links}>Solutions</Link><br />
                                            <Link to="about" className={styles.links}>About</Link><br />
                                        </a>
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <h4 className={styles.headings}>About Us</h4>
                                <p style={{ fontSize: "1.5vw", marginTop: "3vw" }}>Great solution For Effortless
                                   <br /> Collaboration.</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <h4 className={styles.headings}>Contact Us</h4>
                                <p style={{ fontSize: "1.3vw", marginTop: "3vw" }}>
                                    <img src={call} alt="call" style={{ width: "25px", marginRight: 4 }} />
                                    +92 334 5505891
                                </p>
                                <p style={{ fontSize: "1.3vw" }}>
                                    <img src={mail} alt="mail" style={{ width: "30px", marginRight: 6 }} />
                                    umair.bscs3643@iiu.edu.pk
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ textAlign: "center", marginTop: "7vw", paddingBottom: "5vw" }}>
                            <Col xs={12} md={12}>
                                <p style={{ fontSize: "1.3vw" }}>© 2021 Elevate Collaboration. All Rights Reserved.</p>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        </>
    )
}

export default Footer
