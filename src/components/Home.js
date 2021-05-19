import Navbar from "./Navbar/Navbar";
import background from '../assets/background.png';
import { Button } from 'react-bootstrap';
import Pic from "./../assets/home1.png"
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div style={{
                width: "100%",
                height: "1080px",
                backgroundImage: `url(${background})`
            }}>
                <Navbar />


                <div style={{
                    width: "85%",
                    margin: "auto",
                    marginTop: "8%"
                }}>
                    <span style={{
                        float: "left",
                        marginTop: "30px",
                        marginRight: "20px"
                    }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "350%" }}>Effortless real-time <br /> collaboration </h1>
                        <h5 ><br />
                            Why use Elevate Collaboration? Because only it<br />
                         gives teams everything they need to stay in<br />
                          sync, hit deadlines, and reach their goals.
                        <br /><br />
                            <Link to="signup">
                                <Button variant="primary" style={{
                                    color: "white",
                                    backgroundColor: "#2F53D3",
                                    borderRadius: "25px",
                                    width: "25%",
                                    fontWeight: "600",
                                    fontSize: "100%",
                                }}>Sign Up</Button>
                            </Link>
                        </h5>
                    </span>
                    <img src={Pic} alt="cloud computing"
                        style={{
                            display: "inline",
                            width: "52%",
                            borderRadius: 50,
                            float: "left"
                        }}
                    />
                </div>


            </div>
        </>
    )
}
export default Home;