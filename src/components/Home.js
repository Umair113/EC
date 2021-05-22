import Navbar from "./Navbar/Navbar";
import background from '../assets/background.png';
import { Button } from 'react-bootstrap';
import Pic from "./../assets/home1.png"
import Pic2 from "./../assets/home2.png"
import Pic3 from "./../assets/home3.jpg"
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

function Home() {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    minHeight: "650px",
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
                                    minWidth: "25%",
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
                    minHeight: "40vw",
                    backgroundColor: `white`
                }}>
                <div style={{
                    width: "85%",
                    margin: "auto",
                    marginTop: "8%"
                }}>
                    <span style={{ width: "36vw", float: "left" }}>
                        <img src={Pic2} alt="workspace"
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
                    minHeight: "400px",
                    backgroundColor: "white",
                    marginBottom: "6vw"
                }}>

                <div
                    style={{
                        width: "85%",
                        marginLeft: "12%",
                        marginTop: "8%",

                    }}>
                    <span
                        style={{
                            float: "left",
                            marginTop: "30px",
                            marginRight: "20px",

                            textAlign: "center"
                        }}>
                        <h4 style={{ fontWeight: "bold", fontSize: "2vw" }}>The board is just awesome! </h4>
                        <h5 style={{ fontSize: "1.5vw" }}>
                            <br />
                            Lists and cards are the building<br />
                                blocks of organizing work on<br />
                                a Kanban board.<br />
                                Grow from there with task<br />
                                assignments, timelines,<br />
                                productivity metrics,<br />
                                calendars, and more.<br />


                        </h5>
                    </span>
                    <span style={{ width: "62%", float: "left" }}>
                        <img src={Pic3} alt="kanban board"
                            style={{
                                width: "100%"
                            }}
                        />
                    </span>
                </div>


            </div>

            <div
                style={{
                    width: "100%",
                    minHeight: "20vw",
                    backgroundColor: `white`
                }}>
                <span
                    style={{
                        marginTop: "3vw",
                        textAlign: "center"
                    }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "4vw" }}>Collaborate without any effort </h1>
                    <h5 style={{ fontSize: "1.5vw" }}>
                        <br />
                        We've built a product that was much needed, and we'd like <br />
                        to share it with you.

                        <br /><br />
                        <Link to="signup">
                            <Button variant="primary" style={{
                                color: "white",
                                backgroundColor: "#2F53D3",
                                borderRadius: "3vw",
                                width: "20%",
                                minHeight: "5vw",
                                fontWeight: "600",
                                fontSize: "1.5vw",
                            }}>Sign Up Now</Button>
                        </Link>
                    </h5>


                </span>

            </div>

            <Footer />
        </>
    )
}
export default Home;