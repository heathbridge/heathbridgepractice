import FAQ from "../Components/FAQ";
import Header from "../Components/Templates/Header";
import TopSection from "../Components/Templates/TopSection";
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from "@mui/material";



const Other = () => {


    return (
        <div className="info-container">
            <Header title="Other" />
            <div className="info-section">
                <TopSection />
                <div className="general-container">
                    <FAQ />
                    <div className="general-service-card">
                        <h2 style={{fontSize:"35px", color:"white", paddingLeft:"5px"}} className="sub-title">Test Results</h2>
                        <br />
                        <p style={{textAlign:'justify'}}>Kindly note that patients who have recently undergone a blood test via their GP may expect results within a turnaround time of up to 7 days.</p>
                        <p style={{textAlign:'justify'}}>For patients who have undergone blood tests upon the request of a specialist, we recommend following up on the results by reaching out to the hospital or consultant where the blood tests were conducted.</p>
                        <p style={{textAlign:'justify'}}>Alternatively, patients can access their results through the NHS app once they have been reviewed by a GP.</p>
                        <h2 style={{fontSize:"35px", color:"white", paddingLeft:"5px"}} className="sub-title">Useful Contacts</h2>
                        <br />
                        <Grid container spacing={1} style={{display:"flex"}}>
                            <Grid xs={12} md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://www.nhs.uk/Services/hospitals/Overview/DefaultView.aspx?id=RJ731")}>Queen Mary's Hospital</Button>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://www.chelwest.nhs.uk/")}>Chelsea and Westminster Hospital</Button>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Button variant='contained'  className='other-services-btn' onClick={() => window.open("https://www.stgeorges.nhs.uk/")}>St. George's Hospital</Button>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://www.kingstonhospital.nhs.uk/")}>Kingston Hospital</Button>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://clch.nhs.uk/services/walk-in-centres")}>Parsons Green NHS Walk-in Centre</Button>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://www.stgeorges.nhs.uk/newsitem/new-urgent-treatment-centre-opens-at-st-georges/")}>Urgent Treatment Centre at St George's</Button>
                            </Grid>
                        </Grid>
                        <br />
                        <h2 style={{fontSize:"35px", color:"white", paddingLeft:"5px"}} className="sub-title">Other Services</h2>
                        <br />
                        <br />
                        <Grid container spacing={1} style={{display:"flex"}}>
                            <Grid xs={12} md={4}>
                                <Button variant='outlined' className='other-services-btn' onClick={() => window.open("https://fis.wandsworth.gov.uk/kb5/wandsworth/fsd/localoffer.page?familychannel=2-10&localofferagebands=1")}>Wand Card</Button>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Button variant='outlined' className='other-services-btn' onClick={() => window.open("https://swlstg.nhs.uk/wandsworth-talking-therapies")}>Talk Wandsworth</Button>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Button variant='outlined'className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_275558297cb5498682bec31dbfa6de92.pdf")}>Get help & Advice</Button>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Button variant='outlined' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_986833d5a9114f55a8e1bd3d0988ec3f.docx?dn=Hearing%20Voices%20%20Groups%20and%20Forums.docx")}>Hearing Voices Groups</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Other;