import { Button} from "@mui/material";
import Header from "../Templates/Header"
import TopSection from "../Templates/TopSection";
import Grid from '@mui/material/Unstable_Grid2';
import FAQ from "../FAQ";

const DisplayPrescriptions = () => {
    return (
        <div className="info-container">
            <Header title="Prescriptions" />
            <div className="info-section">
                <TopSection />
                <div className="general-container">
                <FAQ />
                <div className="general-service-card">
                    <h2 className="sub-title">PLEASE NOTE: All scripts take 48 hours (two working days) to process:</h2>
                    <br />
                    <br />
                    <Button variant="contained" color="success" className="order-online-btn" onClick={() => window.open("https://www.nhs.uk/nhs-app/account/")}>Click Here To Order Online</Button>
                    <br />
                    <br />
                    <h2 className="sub-title" style={{textAlign:"left", paddingLeft:"10px"}}>From The Pharmacist</h2>
                    <br />
                    <Grid container spacing={1} style={{backgroundColor: "white", margin: "0", paddingLeft: "10px"}}>
                        <Grid xs={6} md={3} style={{width: "auto", paddingLeft: "0"}}>
                            <Button variant="contained" color="secondary" style={{alignSelf: "left"}} onClick={() => window.open("https://www.husbandspharmacy.co.uk/")}>Husbands Pharmacy</Button>
                        </Grid>
                        <Grid xs={6} md={3} style={{paddingLeft: "0",width: "auto"}}>
                            <Button variant="contained" color="secondary" onClick={() => window.open("https://www.putneypharmacy.co.uk/")}>Putney Pharmacy</Button>
                        </Grid>
                        <Grid xs={6} md={3} style={{paddingLeft: "0",width: "auto"}}>
                            <Button variant="contained" color="secondary" onClick={() => window.open("https://www.paydens.com/findpharmacy/details/paydens-pharmacy-putney-upper-richmond")}>Paydens Pharmacy</Button>
                        </Grid>
                        <Grid xs={6} md={3} style={{paddingLeft: "0",width: "auto"}}>
                            <Button variant="contained" color="secondary" onClick={() => window.open("https://www.boots.com/stores/869-london-putney-high-street-sw15-1sr?utm_source=google&utm_medium=organic&utm_campaign=LPM_google_869")}>Boots Pharmacy</Button>
                        </Grid>
                        <Grid xs={6} md={6} style={{paddingLeft: "0",width: "auto"}}>
                            <Button variant="contained" color="secondary" onClick={() => window.open("https://www.google.com/maps/place/Mansons+Pharmacy/@51.4569722,-0.1975927,17z/data=!3m1!4b1!4m6!3m5!1s0x48760f6675dbea5d:0xc3e68873e0da447a!8m2!3d51.4569722!4d-0.1975927!16s%2Fg%2F1tdklq3l?entry=ttu")}>Mansons Pharmacy</Button>
                        </Grid>
                    </Grid>
                    < br />
                    <h2 className="sub-title" style={{textAlign:"left", paddingLeft:"10px"}}>In Person</h2>
                    <br />
                    <p style={{backgroundColor: "white", margin: "0", textAlign:"left", fontSize:"17px", paddingLeft:"10px"}}>Using the right hand page of your prescription, tick the required items, and leave it with the receptionist. (If you do not have this to hand, clearly write down your name and date of birth, and those items you require). You can collect the completed prescription 48 hours later.</p>
                    <br />
                    <h2 className="sub-title" style={{textAlign:"left", paddingLeft:"10px"}}>By Post</h2>
                    <br />
                    <p style={{backgroundColor: "white", margin: "0", textAlign:"left", fontSize:"17px", paddingLeft:"10px"}}>You can post us the right hand page of your prescription, (or a clearly written request including your name and date of birth). If you wish the prescription to be posted back to you, please enclose a Stamped Addressed Envelope.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayPrescriptions;