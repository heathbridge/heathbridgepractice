import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

const OnlineOptions = () => {
    return (
        <div className="info-container" id='info-online-opt'>
            <div className='online-opt-main-div'>
                <Grid container spacing={2} className="online-grid-container">
                    <Grid xs={12} md={6} className="online-opt-container">
                        <div className='online-opt-div'>
                            <h3>Pharmacy First</h3>
                            <p>Your local pharmacy can now prescribe a range of treatments (including antibiotics) for common infections & conditions</p>
                            <Button variant='contained' onClick={() => window.open('https://www.patienttriage.co.uk/the-heathbridge-practice?serviceId=b33c1f59-66fb-410b-aa6d-f42674d334f8')}>Click Here</Button>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} className="online-opt-container">
                        <div className='online-opt-div'>
                            <h3>Mental Health</h3>
                            <p>Most mental health support services in wandsworth don't need a GP referral.</p>
                            <p>Refer yourself here:</p>
                            <Button variant='contained' onClick={() => window.open('https://www.southwestlondon.icb.nhs.uk/find-nhs-services/mental-health/wandsworth/')}>Click Here</Button>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} className="online-opt-container">
                        <div className='online-opt-div'>
                            <h3>Musculoskeletal</h3>
                            <p>getUBetter app is free to wandsworth residents, it guides you through a rehab programme for common types of joint pain</p>
                            <Button variant='contained' onClick={() => window.open('https://app.getubetter.com/request-access/1/6512bd43d9caa6e02c990b0a82652dca')}>Click Here</Button>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} className="online-opt-container">
                        <div className='online-opt-div'>
                            <h3>... Continue to</h3>
                            <p>Start an Online Consultation with the triage GP.</p>
                            <Button variant='contained' color='success' onClick={() => window.open('https://florey.accurx.com/p/H85061')}>Online Consultation</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default OnlineOptions;