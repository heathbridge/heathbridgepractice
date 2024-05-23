import Header from "../Components/Templates/Header";
import TopSection from "../Components/Templates/TopSection";
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Stack } from "@mui/material";
import FAQ from "../Components/FAQ";

const Appointments = () => {
    return (
        <div className="info-container">
            <Header title="Appointments" />
            <div className="info-section">
                <TopSection />
                <div className="general-container">
                    <FAQ />
                    <div className="general-service-card" style={{paddingBottom:"90px"}}>
                        <h2 style={{fontSize:"35px", textAlign:"left", backgroundColor: "#056ded", color:"white", paddingLeft:"5px"}} className="sub-title">WAYS TO BOOK AN APPOINTMENT</h2>
                        <br />
                        <h2 className="sub-title" style={{textAlign:"left", padding:"0", paddingLeft:"10px"}}>Start an Online Conversation</h2>
                                <Grid container spacing={3} style={{backgroundColor: "white", margin: "0"}}>
                                <Grid xs={6} md={6}>
                                    <div className="info-cards-app-two">
                                        <h3>Start an Online Conversation</h3>
                                        <Stack spacing={2}>
                                            <Stack><Button variant="contained" color="success">CLICK HERE</Button></Stack>
                                            <Stack><p style={{fontSize:"15px"}}>to start an online conversation with us</p></Stack>
                                        </Stack>
                                    </div>
                                </Grid>
                                <Grid xs={6} md={6}>
                                    <div className="info-cards-app">
                                        <h3>Call Us</h3>
                                        <Stack spacing={2}>
                                            <Stack><p style={{fontSize:"15px"}}>If you wish to book an appointment, please call us on 02082464070 and one of our care navigators will get in touch you.</p></Stack>
                                        </Stack>
                                    </div>
                                </Grid>
                                <Grid xs={6} md={6}>
                                    <div className="info-cards-app">
                                        <h3>NHS App</h3>
                                        <Stack spacing={2}>
                                            <Stack><p style={{fontSize:"15px"}}>You can book Blood Tests & Smears on this platform</p></Stack>
                                            <Stack><Button variant="outlined" color="warning">CLICK HERE</Button></Stack>
                                        </Stack>
                                    </div>
                                </Grid>
                                <Grid xs={6} md={6}>
                                    <div className="info-cards-app-two">
                                        <h3>Patient Access</h3>
                                        <Stack spacing={2}>
                                            <Stack><p style={{fontSize:"15px"}}>A portal that allows you to book some appointments and order medication</p></Stack>
                                            <Stack><Button variant="contained" color="warning">CLICK HERE</Button></Stack>
                                        </Stack>
                                    </div>
                                </Grid>
                            </Grid>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Appointments;