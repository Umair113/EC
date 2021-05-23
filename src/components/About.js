import React from 'react'
import Footer from './Footer/Footer'
import Navbars from './Navbar/Navbar'

const About = () => {
    return (
        <>
            <Navbars />
            <div
                style={{
                    width: "100%",
                    margin: "auto",
                    minHeight: "30vw", marginTop: "15%",
                    backgroundColor: "white"
                }}>
                <div
                    style={{
                        textAlign: "center",

                    }}>
                    <h2 style={{ fontSize: "3vw", fontWeight: "bold" }}>Mission</h2><br /><br />
                    <p style={{ fontSize: "2vw", fontWeight: "600" }}>Our mission is to help humanity thrive<br />
                by enabling the world’s teams to work<br />
                together effortlessly</p>
                </div>
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
                        textAlign: "center"
                    }}>
                    <span style={{

                    }}>

                        <h1 style={{ fontSize: "3vw", fontWeight: "bold" }}>Project</h1>
                        <h5 style={{ fontSize: "1.9vw", fontWeight: "600" }}>
                            <br />
                            With Elevate Collaboration, you will never lose your project files,<br />
                            notes, folders and links again. Share them with<br />
                            your team in one workspace, in real-time.<br />
                            Elevate Collaboration can be used by individuals or teams,<br />
                            at home<br />
                            or at work (or anywhere!) Automatic syncing means<br />
                            your lists and notes are always up to date on every<br />
                            device.<br />

                            <br /><br />

                        </h5>
                    </span>

                </div>
            </div>


            <div
                style={{
                    width: "100%",
                    margin: "auto",
                    minHeight: "42vw",
                    backgroundColor: "#E5E5E5"
                }}>
                <div
                    style={{
                        width: "80%",
                        margin: "0 auto",
                        paddingTop: "6%",
                        height: "100%",
                        textAlign: "center"
                    }}>
                    <span style={{

                    }}>

                        <h1 style={{ fontSize: "3vw", fontWeight: "bold" }}>Our Team</h1>
                        <h5 style={{ fontSize: "1.9vw", fontWeight: "600", marginTop: "9vw" }}>
                            <span style={{ width: "50%", float: "left" }}>
                                <br />
                            Muhammad Umair<br />
                            umair.bscs3643@iiu.edu.pk
                            <br />
                            </span>
                            <span style={{ width: "50%", float: "left" }}>
                                <br />
                            Muhammad Haris<br />
                            haris.bscs3691@iiu.edu.pk
                            <br />
                            </span>
                        </h5>
                    </span>

                </div>
            </div>

            <Footer />

        </>
    )
}

export default About
