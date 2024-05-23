import Header from "../Components/Templates/Header"
import TopSection from "../Components/Templates/TopSection"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { listOfOurServices } from "../Data-Assets/data-assets";

import FAQ from "../Components/FAQ"

import { sortByTitle } from "../Components/functions/functions";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
    borderBottom: 0,
    },
    '&::before': {
    display: 'none',
    },
}));
  
const AccordionSummary = styled((props) => (
<MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
/>
))(({ theme }) => ({
backgroundColor:
    theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, .05)'
    : 'rgba(0, 0, 0, .03)',
flexDirection: 'row-reverse',
'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
},
'& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
padding: theme.spacing(2),
borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Services = () => {

    const [expanded, setExpanded] = React.useState('panel0');
    const [serviceArray, setServiceArray] = React.useState([]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    React.useEffect(() => {

      if (!serviceArray) {
        const sortedService = sortByTitle(listOfOurServices);
        setServiceArray(sortedService);
      }

    }, [serviceArray])

    return (
        <div className="info-container">
            <Header title="Services" />
            <TopSection />
            <div className="general-container">
                <FAQ />
                <div className="general-service-card">
                <h2 className="sub-title">Our Services At The Practice</h2>
                <p>Below is the list of services offered at our practice:</p>
                <p>If you can't find a service we offer, patients are encouraged to submit a query through our online portal.</p>
                <Grid container display={{display: "flex", justifyContent: "center"}}>
                        <Grid md={12}>
                            <Button variant='contained' className='other-services-btn' color="success" onClick={() => window.open("https://florey.accurx.com/p/H85061")}>Start an Online Consultation</Button>
                        </Grid>
                </Grid>
                <br />
                {serviceArray.map((service, i) => {
                    return (
                        <Accordion key={`${service}-${i}`} expanded={expanded === `panel${service.id}`} onChange={handleChange(`panel${service.id}`)}>
                            <AccordionSummary aria-controls={`panel${service.id}-content`} id={`panel${service.id}d-header`}>
                            <Typography style={{color:"#043269", fontWeight:"500"}}>{service.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            {service.bio.map((bioText) => {
                                if (!Array.isArray(bioText)) {
                                    return (
                                        <div>
                                            <Typography style={{textAlign: "justify"}}>
                                                {bioText}
                                            </Typography>
                                            <br/>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            {bioText.map((item) => {
                                                return (
                                                    <li style={{display:"flex"}}>
                                                        <Typography style={{textAlign: "justify"}}>
                                                            {item}
                                                        </Typography>
                                                    </li>
                                                ) 
                                            })}
                                            <br/>
                                        </div>
                                    )
                                }
                            })}
                            </AccordionDetails>
                            {service?.links && <h4>Links:</h4>}
                            {service?.links && service.links.map((item) => <a href={item.url}><Typography>{item.title}</Typography></a>)}
                        </Accordion>
                           
                    )
                })}
                </div>
            </div>
        </div>
    );
};

export default Services;