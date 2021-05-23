import React from 'react'
import Navbars from './Navbar/Navbar'
import Pic from "./../assets/product1.jpg"
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

const Product = () => {
    return (
        <>
            <Navbars />


            <div
                style={{
                    width: "85%",
                    margin: "auto",
                    marginTop: "8%",
                    minHeight: "40vw"
                }}>
                <span style={{ width: "52%", float: "left" }}>
                    <img src={Pic} alt="cloud computing"
                        style={{
                            borderRadius: 50,
                            width: "100%"
                        }}
                    />
                </span>
                <span style={{
                    float: "left",
                    marginTop: "30px",
                    marginLeft: "5vw"
                }}>
                    <h5 style={{ fontSize: "1.5vw" }}> AUTOMATION</h5>
                    <h1 style={{ fontWeight: "bold", fontSize: "3vw" }}>Let us do the work
                    <br />you hate </h1>
                    <h5 style={{ fontSize: "1.7vw" }}>
                        <br />
                        Don’t waste time on<br />
                        tedious manual tasks. Let<br />
                        Automation do it for you.<br />
                        Simplify workflows, reduce<br />
                        errors, and save time for<br />
                        solving more important<br />
                        problems.<br />
                        <br /><br />

                    </h5>
                </span>

            </div>

            <div
                style={{
                    width: "100%",
                    margin: "auto",
                    marginTop: "8%",
                    minHeight: "42vw",
                    backgroundColor: "#F3F1F1"
                }}>
                <div
                    style={{
                        width: "55%",
                        margin: "0 auto",
                        paddingTop: "6%",
                        height: "100%",

                    }}>
                    <span style={{

                    }}>
                        <h5 style={{ fontSize: "1.9vw" }}> WORKLOAD</h5><br />
                        <h1 style={{ fontSize: "5vw" }}>Manage your team’s<br /> workload </h1>
                        <h5 style={{ fontSize: "1.7vw" }}>
                            <br />
                            See how busy team members are across projects—all in<br />
                            one view. Make sure no one’s over or underworked, and<br />
                            keep initiatives on track.<br />

                            <br /><br />
                            <Link to="solutions">
                                <Button variant="primary" style={{
                                    color: "white",
                                    backgroundColor: "#2F53D3",
                                    borderRadius: "1.5vw",
                                    minWidth: "25%",
                                    fontWeight: "600",
                                    fontSize: "1.5vw",
                                }}>See Solutions</Button>
                            </Link>
                        </h5>
                    </span>

                </div>
            </div>


            <div
                style={{
                    width: "100%",
                    minHeight: "52vw",
                    backgroundColor: "#E5E5E5"
                }}>
                <div
                    style={{
                        width: "55%",
                        margin: "0 auto",
                        paddingTop: "6%",
                        height: "100%",

                    }}>
                    <span style={{

                    }}>
                        <h5 style={{ fontSize: "2vw" }}> Professional</h5><br />
                        <h1 style={{ fontSize: "5vw" }}>Meet deadlines and<br />
                        exceed<br />
                        expectations </h1><br />
                        <h5 style={{ fontSize: "1.7vw" }}>
                            <br />
                            It’s hard work to impress a client. But Dropbox<br />
                            has your back—from first draft to final<br />
                            deliverable. Manage your time, your tools, and<br />
                            all your projects more efficiently.<br />

                            <br /><br />
                            <Link to="signup">
                                <Button variant="primary" style={{
                                    color: "white",
                                    backgroundColor: "#2F53D3",
                                    borderRadius: "1.5vw",
                                    minWidth: "25%",
                                    fontWeight: "600",
                                    fontSize: "1.5vw",
                                }}>Sign Up Now</Button>
                            </Link>
                        </h5>
                    </span>

                </div>
            </div>

            <Footer />

        </>
    )
}

export default Product
