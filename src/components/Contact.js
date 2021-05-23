import React from 'react'
import Footer from './Footer/Footer'
import Navbars from './Navbar/Navbar'
import { Button } from 'react-bootstrap';
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <>
            <Navbars />
            <div
                style={{
                    width: "100%",
                    margin: "auto",
                    minHeight: "70vw", marginTop: "15%",
                    backgroundColor: "white"
                }}>
                <div
                    style={{
                        textAlign: "center",

                    }}>
                    <h2 style={{ fontSize: "3.3vw", fontWeight: "bold" }}>We'd love to hear from you</h2><br /><br />
                    <p style={{ fontSize: "2vw", fontWeight: "600" }}>
                        Looking for more information or <br />
                    Have a simple question?<br />
                    Submit your information and<br />
                    we will follow up<br />
                    with you as soon as possible. </p>
                </div>
                <div className={styles.formContainer}>
                    <p className={styles.text}>
                        <p style={{ marginBottom: "5 %" }}> Name</p>
                        <input type="text"
                            className={styles.input}
                        />
                        <p style={{ marginBottom: "5 %" }}> Email</p>
                        <input type="email"
                            className={styles.input}
                        />
                        <p style={{ marginBottom: "5 %" }}> Phone Number</p>
                        <input type="text"
                            className={styles.input}
                        />
                        <p style={{ marginBottom: "5 %" }}> What would you like to discuss</p>
                        <textarea type="textarea" rows="5" cols="33"
                            className={styles.input}
                        />
                        <br /><br /><br />
                        <Button variant="primary" style={{
                            color: "white",
                            backgroundColor: "#2F53D3",
                            borderRadius: "1.5vw",
                            minWidth: "100%",
                            fontWeight: "600",
                            fontSize: "1.7vw",
                        }}>Submit</Button>
                        <br /><br /><br />

                    </p>
                </div>
            </div>






            <Footer />
        </>
    )
}

export default Contact
