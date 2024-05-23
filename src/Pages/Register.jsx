import Header from "../Components/Templates/Header";
import TopSection from "../Components/Templates/TopSection";
import { Button } from "@mui/material";
import Iframe from "react-iframe";
import FAQ from "../Components/FAQ";

const Register = () => {

    const handleOnClick = () => {
        window.open("https://gp-registration.nhs.uk/H85061/gpregistration/landing")
    }
    

    return (
        <div className="info-container">
            <Header title="Register" />
            <div className="info-section">
                <TopSection />
                <div className="general-container">
                        <FAQ />
                        <div className="general-service-card">
                        <h2 style={{fontSize:"35px", textAlign:"left", backgroundColor: "#056ded", color:"white", paddingLeft:"5px"}} className="sub-title">How To Register</h2>
                        <br />
                        <br />
                        <h2 className="sub-title" style={{textAlign:"left", padding:"0", paddingLeft:"10px"}}>1. Please enter your postcode:</h2>
                        <br />
                        <p style={{backgroundColor: "white", margin: "0", textAlign:"left", fontSize:"17px", paddingLeft:"10px"}}>We prioritize your well-being and request that individuals interested in registering with our practice provide their residential postcode. This helps ensure our doctors can deliver optimal care to patients living within our catchment service area.</p>
                        <br />
                        <p style={{backgroundColor: "white", margin: "0", textAlign:"left", fontSize:"17px", paddingLeft:"10px"}}>We advidse patients to type in their postcode before proceeding to register with the practice</p>
                        <br />
                        <Iframe width="97%" height="350px" frameborder="1" src="https://experience.arcgis.com/experience/c5dfab9f267944d2a9d68e8b0469568b/page/public?data_filter=dataSource_1-GI2598_Bdys_PUBLIC_9878%3APracticeCode%3D%27H85061%27" tabindex="-1" data-restore-tabindex="null"></Iframe>
                        <br />
                        <br />
                        <h2 className="sub-title" style={{textAlign:"left", padding:"0", paddingLeft:"10px"}}>2. Complete the form:</h2>
                        <br />
                        <p style={{backgroundColor: "white", margin: "0", textAlign:"left", fontSize:"17px", paddingLeft:"10px"}}>Please verify that your postcode is valid and falls within our service area before moving on to fill out the form.</p>
                        <br />
                        <br />
                        <h2 className="sub-title" style={{textAlign:"left", padding:"0", paddingLeft:"10px"}}>3. Documents:</h2>
                        <br />
                        <p style={{backgroundColor: "white", margin: "0", textAlign:"left", fontSize:"17px", paddingLeft:"10px"}}>The Surgery will ask patients to submit legitimate documents, such as a photo ID and address verification, while completing the form.</p>
                        <br />
                        <br />
                        <div className="general-service-card" style={{textAlign:"left", borderTop: "3px dotted gray", borderRadius: "0", padding: "20px 0", margin: "0"}}>
                            <div className="default-card-section">
                                <Button variant="contained" style={{width: "100px", height: "40px"}} onClick={handleOnClick}>Register</Button>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Register;