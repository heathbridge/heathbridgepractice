import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import nhsLogo from "../assets/National_Health_Service_(England)_logo.svg.png";
import appleStore from '../assets/Icons/appstore.svg';
import playStore from '../assets/Icons/playstore.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        hblue: {
            main: "#46ccd5",
            contrastText: '#ffffff',
        },
    }
  });

const DisplayFooter = () => {
    
    return (
        <div className='footer-section'>
            <div className='footer-container-div'>
                    <div className='footer-div'>
                    
                        <Grid container >
                            <Grid xs={12} md={4} style={{display: "flex", justifyContent: "center"}}>
                                <img src={nhsLogo} className='nhs-logo' alt='nhs logo'/>
                            </Grid>
                            <Grid xs={12} md={4} id='footer-icon-div'>
                                <h3 style={{color:'#2266b9'}}>CQC Rating: <ThemeProvider theme={theme}><Button variant="contained" color="hblue" style={{height:"22px", width: "15px", fontSize:"10px"}}>Good</Button></ThemeProvider></h3>
                            </Grid>
                            <Grid xs={12} md={4} id='footer-icon-div'>
                                <div className="store-icon-div">
                                    <h3 style={{color:'#2266b9'}}>Download the NHS App</h3>
                                    <Button onClick={() => window.open('https://apps.apple.com/us/app/nhs-app/id1388411277?ls=1')}>
                                        <img src={appleStore} className="store-icons" alt='apple app store icon'/>
                                    </Button>
                                    <Button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.nhs.online.nhsonline&pli=1')}>
                                        <img src={playStore} className="store-icons" alt='google play store icon'/>
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
            </div>
        </div>
    )
}

export default DisplayFooter;