import { NavLink} from "react-router-dom";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import getUBetterBanner from "../assets/getUBetter website JPEG2 updated 09_09_20.jpg"
import nhsAppBanner from "../assets/nhs-app-banner.png"
import goodThinkingBanner from "../assets/good-thinking-banner.webp"

const steps = [
    {
      label: 'getUbetter',
      image: getUBetterBanner,
      alt: "get u better banner",
      link: "https://app.getubetter.com/request-access/1/6512bd43d9caa6e02c990b0a82652dca"
    },
    {
      label: 'NHS App',
      image: nhsAppBanner,
      alt: "n h s banner",
      link: "https://www.nhs.uk/nhs-app/"
    },
    {
      label: 'Digital Mental Wellbeing',
      image: goodThinkingBanner,
      alt: "Digital Mental Wellbeing banner",
      link: "https://www.good-thinking.uk/"
    },
  ];

const FAQ = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="faq-container">
            <div className="side-navlinks-container">
                <h2 style={{color: "white", textAlign: "left", padding: "0 5px", borderBottom: "1px solid white", marginBottom: "0", paddingBottom:"5px"}} className="faq-title">Useful links:</h2>
                <ul style={{listStyle: "none", padding: "0", margin:"0"}}>
                    <li className="links-li"><NavLink to="/heathbridge-practice/other" style={{textDecoration:"none"}}><p className='faq-links'>Children & young people's health</p></NavLink></li>
                    <li className="links-li"><NavLink style={{textDecoration:"none"}} onClick={() => window.open("https://www.cqc.org.uk/location/1-551280085")}><p className="faq-links">CQC-report</p></NavLink></li>
                    <li className="links-li"><NavLink style={{textDecoration:"none",display:"flex", flexDirection:"column"}} to='/heathbridge-practice/policies'><p className="faq-links">Practice policies</p></NavLink></li>
                    <li className="links-li"><NavLink to="/heathbridge-practice/patient-participation-group" style={{textDecoration:"none"}}><p className="faq-links">Patient participation group (PPG)</p></NavLink></li>
                    <li className="links-li"><NavLink style={{textDecoration:"none",display:"flex", flexDirection:"column"}} onClick={() => window.open("https://florey.accurx.com/p/H85061/self-referral")}><p className="faq-links">Self-refer</p></NavLink></li>
                    <li className="links-li"><NavLink to="/heathbridge-practice/other" style={{textDecoration:"none"}}><p className="faq-links">Useful contacts</p></NavLink></li>
                </ul>
            </div>
            <div className="side-navlinks-container">
                <h2 style={{color: "white", textAlign: "left", padding: "0 5px", borderBottom: "1px solid white", marginBottom: "0", paddingBottom:"5px"}} className="faq-title">Frequently asked questions:</h2>
                <h4 style={{color: "white", textAlign: "left", padding: "5px 10px", borderBottom: "1px solid white", margin: "0", backgroundColor:"rgb(60, 58, 58)"}} className="faq-title">How do I?</h4>
                <ul style={{listStyle: "none", padding: "0", margin:"0"}}>
                    <li className="links-li"><NavLink to='/heathbridge-practice/feedback-form' style={{textDecoration:"none",display:"flex", flexDirection:"column"}}><p className="faq-links">Make a complaint</p></NavLink></li>
                    <li className="links-li"><NavLink style={{textDecoration:"none",display:"flex", flexDirection:"column"}} to="/heathbridge-practice/register"><p className="faq-links">Register with the practice</p></NavLink></li>
                    <li className="links-li"><NavLink style={{textDecoration:"none",display:"flex", flexDirection:"column"}} onClick={() => window.open("https://www.nhs.uk/nhs-app/")}><p className="faq-links">See my medical records</p></NavLink></li>
                    <li className="links-li"><NavLink style={{textDecoration:"none",display:"flex", flexDirection:"column"}} onClick={() => window.open("https://www.nhs.uk/nhs-app/")}><p className="faq-links">See my test results</p></NavLink></li>
                </ul>
            </div>
            <div className="side-navlinks-container" style={{padding: "0",backgroundColor:"#043269"}}>
                    <h2 style={{color: "white", textAlign: "left", padding: "10px 5px", borderBottom: "1px solid white", marginBottom: "0", paddingBottom:"5px", backgroundColor:"#2266b9"}} className="faq-title">Useful apps</h2>
                    <h2 style={{color: "white", textAlign: "left", padding: "3px 5px", marginBottom: "0", paddingBottom:"5px", backgroundColor:"#043269"}} className="faq-title">{steps[activeStep].label}</h2>
                    <Button onClick={() => window.open(steps[activeStep].link)}><img src={steps[activeStep].image} style={{height: 250, maxWidth: 400, width: '100%'}} alt={steps[activeStep].alt}/></Button>
                    <MobileStepper
                        style={{backgroundColor:"#043269", color:"white"}}
                        variant="text"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            style={{color:"white"}}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button>
                        }
                        backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color:"white"}}>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                            ) : (
                            <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                        }
                    />
                </div>
        </div>
    )
}

export default FAQ;