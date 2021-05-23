import React from 'react'
import Navbars from './Navbar/Navbar'
import Pic from "./../assets/solutions1.png"
import Pic2 from "./../assets/solutions2.png"
import Pic3 from "./../assets/solutions3.png"
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

const Solutions = () => {
    return (
        <>
            <Navbars />
            <div
                style={{
                    width: "90%",
                    margin: "auto",
                    marginTop: "8%",
                    minHeight: "40vw"
                }}>

                <span style={{
                    float: "left",
                    marginTop: "40px",
                    marginLeft: "5vw"
                }}>

                    <h1 style={{ fontWeight: "bold", fontSize: "2.9vw" }}>Create a Workspace
                    </h1>
                    <h5 style={{ fontSize: "1.7vw" }}>
                        <br />
                        A workspace is a collection of lists and notes.<br />
                        You can create a workspace for your team,<br />
                        project, or idea.<br />
                        Workspaces help to keep<br />
                        your lists and notes organized. You can<br />
                        create as many workspaces as you like.<br />
                        You can also make workspaces collaborative<br />
                        by inviting other people to join them and edit<br />
                        them with you in
                        real-time.<br />
                        <br /><br />

                    </h5>
                </span>
                <span style={{ width: "52%", float: "left" }}>
                    <img src={Pic} alt="workspace"
                        style={{
                            marginTop: "3vw",
                            width: "80%",
                            marginLeft: "3vw"
                        }}
                    />
                </span>

            </div>
            <div
                style={{
                    width: "100%",
                    minHeight: "50vw",
                    backgroundColor: "#F3F1F1"
                }}>
                <div
                    style={{
                        width: "75%",
                        margin: "0 auto",
                        paddingTop: "13%",
                        height: "100%",

                    }}>
                    <span style={{ width: "52%", float: "left" }}>
                        <img src={Pic2} alt="kanban board"
                            style={{
                                width: "80%",
                            }}
                        />
                    </span>
                    <span style={{
                        float: "left",
                        paddingLeft: "3vw"
                    }}>

                        <h1 style={{ fontSize: "3vw" }}>Kanban board</h1><br />
                        <h5 style={{ fontSize: "2vw" }}>
                            <br />
                            This project management and<br />
                            tracking tool designed to help<br />
                            visualize work, limit<br />
                            work-in-progress, and<br />
                            maximize efficiency (or flow).<br />
                        </h5>
                    </span>

                </div>
            </div>



            <div
                style={{
                    width: "100%",
                    minHeight: "50vw",
                    backgroundColor: "#E5E5E5"
                }}>
                <div
                    style={{
                        width: "85%",
                        margin: "0 auto",
                        paddingTop: "9%",
                        height: "100%",

                    }}>

                    <span style={{
                        float: "left",
                        marginLeft: "5.5vw",
                        marginRight: "7vw"
                    }}>

                        <h1 style={{ fontSize: "3vw" }}>Github Integration</h1><br />
                        <h5 style={{ fontSize: "2vw" }}>
                            <br />
                            It can be a hectic task for<br />
                            you as a developer to manage<br />
                            making repositories while<br />
                            getting task assigned<br />
                            simultaneously, so let’s<br />
                            make it easy for you.<br />
                        </h5>
                    </span>
                    <span style={{ width: "52%", float: "left" }}>
                        <img src={Pic3} alt=">Github Integration"
                            style={{
                                width: "80%",
                                height: "25vw"
                            }}
                        />
                    </span>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Solutions
