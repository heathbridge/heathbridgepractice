import Header from "../Components/Templates/Header"
import TopSection from "../Components/Templates/TopSection"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { policies } from "../Data-Assets/data-assets";
import FAQ from "../Components/FAQ";

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



const Policies = () => {

    const [expanded, setExpanded] = React.useState('panel0');
    const [policyArray, setpolicyArr] = React.useState([]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    React.useEffect(() => {

      if (!policyArray.length) {
        const sortedPolicy = sortByTitle(policies);
        setpolicyArr(sortedPolicy);
      }

    }, [policyArray])


    return (
        <div className="info-container">
            <Header title="Policies" />
            <TopSection />
            <div className="general-container">
                <FAQ />
                <div className="general-service-card">
                    <h2 className="sub-h2 sub-title">Our Policies At The Practice</h2>
                    <p>Please see our policies below.</p>
                    <br />
                    <br />
                    <div className="policy-container">
                    {policyArray.map((policy,i) => {
                    return (
                        <Accordion key={`${policy.title}-${i}`} expanded={expanded === `panel${policy.id}`} onChange={handleChange(`panel${policy.id}`)}>
                            <AccordionSummary aria-controls={`panel${policy.id}-content`} id={`panel${policy.id}d-header`}>
                            <Typography style={{color:"#043269", fontWeight:"500"}}>{policy.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            {policy.bio.map((bioText) => {
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

                                              if (!item?.subHeading) {
                                                return (
                                                    <li style={{display:"flex"}}>
                                                        <Typography style={{textAlign: "justify"}}>
                                                            {item}
                                                        </Typography>
                                                    </li>
                                                ) 
                                              } else {
                                                return <h4 style={{fontWeight:"700", textAlign: "center"}}>{item.subHeading}</h4>
                                              }
                                            })}
                                            <br/>
                                        </div>
                                    )
                                }
                            })}
                            {policy?.links && <h4>Links:</h4>}
                            {policy?.links && policy.links.map((item) => <a href={item.url}><Typography>{item.title}</Typography></a>)}
                            </AccordionDetails>
                        </Accordion>   
                    )
                })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policies;