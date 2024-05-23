import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/doctor.png";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import DisplayServicesList from "./DisplayServicesList";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        hblue: {
            main: "#46ccd5",
            contrastText: '#ffffff',
        },
    }
  });

const DisplayHero = () => {
    return (
        <div className="hero-section">
            <div className="hero-container">
                <div className="hero-text-container">
                    <h1>Welcome to Heathbridge Practice</h1>
                    <DisplayServicesList />
                    <p className="hero-p-tag">Consult with a clinician online today.</p>
                    <Grid container style={{display:'flex', justifyContent:"center"}}>
                        <Grid xs={12} md={12} style={{display: 'flex', justifyContent:"center"}}> 
                            <NavLink to='/heathbridge-practice/online-options' className='online-link'>
                                <ThemeProvider theme={theme}>
                                    <Button variant='contained' color="hblue" style={{zIndex:"2", fontSize:"16px"}} className="btn-online-consult">Book an Appointment</Button>
                                </ThemeProvider>
                            </NavLink>
                        </Grid>
                    </Grid>
                </div>
                <img src={bannerImg} className="banner-img" alt='of a doctor seeing a patient' />
            </div>
        </div>
    )
}

export default DisplayHero;