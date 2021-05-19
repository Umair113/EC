import Navbar from "./Navbar/Navbar";
import background from '../assets/background.png';



function Home() {
    return (
        <>

            <div style={{
                width: "100%",
                height: "1080px",
                backgroundImage: `url(${background})`
            }}>
                <Navbar />

                <h1>Home</h1>
            </div>
        </>
    )
}
export default Home;