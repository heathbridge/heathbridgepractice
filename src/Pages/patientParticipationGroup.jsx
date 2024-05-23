import FAQ from "../Components/FAQ";
import Header from "../Components/Templates/Header";
import TopSection from "../Components/Templates/TopSection";
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from "@mui/material";

const PatientParticipationGroup = () => {
    return (
        <div className="info-container">
            <Header title='Patient Participation Group' />
            <div className="info-section">
                <TopSection />
                <div className="general-container">
                    <FAQ />
                    <div className="general-service-card">
                        <h2 style={{fontSize:"35px", textAlign:"left", backgroundColor: "#056ded", color:"white", paddingLeft:"5px"}} className="sub-title">Heathbridge Practice PPG</h2>
                        <br />
                        <Grid xs={12}>
                                <Button variant='contained' className='ppg-btn'  color='primary' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_4fe859dae9694130a6483a23db84f8d1.docx?dn=Welcome%20Statement%20Heathbridge%20PPG.docx")} >PPG Welcome Letter</Button>
                        </Grid>
                        <br />
                        <p style={{textAlign: "justify"}}>
                            We have an active Patient Participation Group (PPG) who have regular meetings to discuss ways of improving patient care and services, and learn more about the running of the practice. If you have any suggestions you would like discussed, you can put them in the comments book held at reception, or write to the Practice Manager, Jay Francisco.
                        </p>
                        <p style={{textAlign: "justify", fontWeight: "600"}}>
                            MR POH LEE ( Patient Group Co-Chair, October 2022) 
                        </p>
                        <p style={{textAlign: "justify"}}>
                            My experience in sales and having dealt with people from diverse cultures and walks of life in my personal and working life through service. 
                        </p>
                        <p style={{textAlign: "justify"}}>
                            What has taken my interest is about doing something for the local community with Heathbridge, my local practice. Promoting and creating community awareness with patients, carers, local voluntary and community groups including local Healthwatch. 
                        </p>
                        <p style={{textAlign: "justify"}}>
                            Improving the communication channels with activities that support good participation encourages patient members of the practice to take greater responsibility for their own health and their family's health. Patient and carer priorities and issues.
                        </p>
                        <p style={{textAlign: "justify"}}>
                            An ongoing communication with the patient population. 
                        </p>
                        <p style={{textAlign: "justify"}}>
                            Thank you for your time and consideration.
                        </p>
                        <p style={{textAlign: "justify"}}>
                        <span style={{fontWeight: "600"}}>MRS JOSEPHINE JONES (Patient Group Co-Chair, October 2022)</span>
                        <br />
                        My varied career background is that of an ex-medical student (1 year), ex-official at the Bank of England (25 years) and am currently working as a Theatre Administrator at an independent school (18 years). I was also the prime carer for my elderly mother who lived with us for 18 years. I come from a medical family and have therefore had experience of the NHS from many directions (including my own health). I have strong organisational and communication skills. I have been a patient of the Heathbridge Practice in its many guises for around 35 years and am happy to assist the PPG
                        </p>
                        <br />
                        <Grid container spacing={2}>
                            <Grid md={4}>
                                <Button variant='outlined' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_0abafdbfca3f44229e9ad82254e60175.pdf")}>For more information on joining</Button>
                            </Grid>
                            <Grid md={4}>
                                <Button variant='outlined' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_e9d21e2e07074148966f9afdf38559fc.pdf")}>Membership & Terms of Reference</Button>
                            </Grid>
                            <Grid md={4}>
                                <Button variant='outlined' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_29c5bae49e834f60aac0c3a867b2fb12.pdf")}>Rules of Membership</Button>
                            </Grid>
                            <Grid md={4}>
                                <Button variant='outlined' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_d25e78033e0b42009fa26c38fdfd933e.pdf")}>Confidentiality Agreement</Button>
                            </Grid>
                        </Grid>
                        <br />
                        <h2 style={{fontSize:"35px", textAlign:"left", backgroundColor: "#056ded", color:"white", paddingLeft:"5px"}} className="sub-title">PPG Minutes</h2>
                        <br />
                        <Grid container spacing={2}>
                            <Grid md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_7886192f88244e89bba5081fd7a5fdfb.doc?dn=PPG%201.doc")}>12th December 2019</Button>
                            </Grid>
                            <Grid md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_c0b7bb29eee34f3c93e3e87579191d8b.pdf")}>31st August 2022</Button>
                            </Grid>
                            <Grid md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_604c898fd37e471aaf7e4e31a7845769.docx?dn=HB%20CHAIR%20MEETING%2016.11.22.docx")}>16th November 2022</Button>
                            </Grid>
                            <Grid md={4}>
                                <Button variant='contained' className='other-services-btn' onClick={() => window.open("https://www.heathbridgepractice.co.uk/_files/ugd/c9dc95_1ae53cda3e7b40fc976a088ac5f8f96e.pdf")}>1st Febuary 2023</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientParticipationGroup;