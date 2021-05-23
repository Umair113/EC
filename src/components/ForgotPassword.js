import React from 'react'
import BottomNav from './Navbar/BottomNav'
import { Button } from 'react-bootstrap';
import logo from './../assets/logo.png';
import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
    return (
        <div
            style={{
                width: "100%",
                backgroundColor: "#FAF6F6",
                textAlign: "center",
                paddingTop: "5%"
            }}>
            <div
                style={{
                    width: "40%",
                    backgroundColor: "white",
                    borderRadius: "5%",
                    minHeight: "50vw",
                    margin: "0 auto",
                    boxShadow: "2px 2px lightgray",
                    paddingTop: "5%"
                }}
            >
                <Link to="/" >
                    <span >
                        <img src={logo} alt="logo" style={{ width: "30px", marginRight: " 4px", marginBottom: " 4px" }} />
                        <span style={{ fontSize: "1.3vw", color: "blue", fontWeight: "bold" }}>Elevate Collaboration</span>
                    </span>
                </Link>
                <div style={{ margin: "0 auto", width: "80%" }}>

                    <div style={{ textAlign: "center", fontSize: "2.5vw", marginTop: "7vw" }}>
                        Forgot your password?
                        </div>
                    <p className={styles.text}>

                        <p style={{ marginBottom: "5 %" }}> Enter your Email</p>
                        <input type="email"
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
                        }}>Send me instructions</Button>
                        <br /><br /><br />

                        <p style={{ textAlign: "center" }}>
                            This site is protected by<br />
                                the Google Privacy Policy<br />
                                and Terms of Service apply.
                            </p><br /><br />
                    </p>
                </div>
            </div>
            <BottomNav />
        </div>
    )
}

export default ForgotPassword
