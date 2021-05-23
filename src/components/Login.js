import React from 'react'
import BottomNav from './Navbar/BottomNav'
import { Button } from 'react-bootstrap';
import logo from './../assets/logo.png';
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const login = () => {
    return (
        <>
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
                        minHeight: "54vw",
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
                        <p className={styles.text}>
                            <p style={{ marginBottom: "5 %" }}> Email Address</p>
                            <input type="email"
                                className={styles.input}
                            />
                            <p style={{ marginBottom: "5 %" }}> Password</p>
                            <input type="password"
                                className={styles.input}
                            />
                            <a href="forgotpassword">
                                <br />
                            Forgot your password?
                            </a><br /><br />
                            <Button variant="primary" style={{
                                color: "white",
                                backgroundColor: "#2F53D3",
                                borderRadius: "1.5vw",
                                minWidth: "100%",
                                fontWeight: "600",
                                fontSize: "1.5vw",
                            }}>Log In</Button><br /><br />
                            <div style={{ textAlign: "center" }}>
                                Don’t have an account?{" "}
                                <Link to="signup">Sign up</Link>
                            </div>
                            <br /><br />
                            <p style={{ textAlign: "center" }}>
                                This site is protected by<br />
                                the Google Privacy Policy<br />
                                and Terms of Service apply.
                            </p>
                        </p>
                    </div>
                </div>
                <BottomNav />
            </div>
        </>
    )
}

export default login
