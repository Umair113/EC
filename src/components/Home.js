import Navbar from "./Navbar/Navbar";
import background from '../assets/background.png';
import { Button } from 'react-bootstrap';
import Pic from "./../assets/home1.png"
import Pic2 from "./../assets/home2.png"
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "650px",
                    backgroundImage: `url(${background})`
                }}>
                <Navbar />


                <div
                    style={{
                        width: "85%",
                        margin: "auto",
                        marginTop: "8%"
                    }}>
                    <span style={{
                        float: "left",
                        marginTop: "30px",
                        marginRight: "20px"
                    }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "4vw" }}>Effortless real-time <br /> collaboration </h1>
                        <h5 style={{ fontSize: "1.5vw" }}>
                            <br />
                            Why use Elevate Collaboration?<br />
                            Because it gives teams everything <br />
                            they need to stay in sync,  hit <br />
                            deadlines, and reach their goals.
                        <br /><br />
                            <Link to="signup">
                                <Button variant="primary" style={{
                                    color: "white",
                                    backgroundColor: "#2F53D3",
                                    borderRadius: "1.5vw",
                                    width: "25%",
                                    fontWeight: "600",
                                    fontSize: "1.5vw",
                                }}>Sign Up</Button>
                            </Link>
                        </h5>
                    </span>
                    <span style={{ width: "52%", float: "left" }}>
                        <img src={Pic} alt="cloud computing"
                            style={{
                                borderRadius: 50,
                                width: "100%"
                            }}
                        />
                    </span>
                </div>


            </div>

            <div
                style={{
                    width: "100%",
                    height: "550px",
                    backgroundColor: `white`
                }}>
                <div style={{
                    width: "85%",
                    margin: "auto",
                    marginTop: "8%"
                }}>
                    <span style={{ width: "36vw", float: "left" }}>
                        <img src={Pic2} alt="cloud computing"
                            style={{
                                width: "100%"
                            }}
                        />
                    </span>
                    <span
                        style=
                        {{
                            float: "left",
                            marginTop: "11vw",
                            marginLeft: "3vw"
                        }}>
                        <h4 style={{ fontSize: "1.5vw" }}>
                            <b>Keep Files, Notes And Links Together</b><br />
                        No more switching between e-mail, Dropbox and Google Docs.<br />
                            <br />
                            <b>Collaborate In Real-Time</b><br />
                        Share files and notes quickly, simply and safely.<br />
                            <br />
                            <b>Stay Organized</b>   <br />
                        Use tags, colors and assign members.<br />
                        </h4>

                    </span>

                </div>
            </div>

            <div
                style={{
                    width: "100%",
                    height: "400px",
                    backgroundImage: `url(${background})`
                }}>



                <div
                    style={{
                        width: "85%",
                        margin: "auto",
                        marginTop: "8%"
                    }}>
                    <span style={{
                        float: "left",
                        marginTop: "30px",
                        marginRight: "20px"
                    }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "4vw" }}>Effortless real-time <br /> collaboration </h1>
                        <h5 style={{ fontSize: "1.5vw" }}>
                            <br />
                            Why use Elevate Collaboration?<br />
                            Because it gives teams everything <br />
                            they need to stay in sync,  hit <br />
                            deadlines, and reach their goals.
                        <br /><br />
                            <Link to="signup">
                                <Button variant="primary" style={{
                                    color: "white",
                                    backgroundColor: "#2F53D3",
                                    borderRadius: "1.5vw",
                                    width: "25%",
                                    fontWeight: "600",
                                    fontSize: "1.5vw",
                                }}>Sign Up</Button>
                            </Link>
                        </h5>
                    </span>
                    <span style={{ width: "52%", float: "left" }}>
                        <img src={Pic} alt="cloud computing"
                            style={{
                                borderRadius: 50,
                                width: "100%"
                            }}
                        />
                    </span>
                </div>


            </div>

        </>
    )
}
export default Home;