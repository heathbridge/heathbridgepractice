import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DisplayColomnSection = () => {
    return (
        <div className='column-section'>
          <Accordion style={{
            backgroundColor: "white", 
            width: "60vw", 
            borderTop: "solid black 1px",
            boxShadow: "none"
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"black"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h4 style={{color:"black"}}>getUbetter</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p style={{color: "black", textAlign: "left"}}>The getUBetter app is provided free of charge by Wandsworth for patients registered
              at HeathBridge. It can be accessed on a Smartphone or on the Web and
              guides you day-by-day through a sequence of exercises and tips to help you get better
              from a range of new or recurrent musculoskeletal conditions:
              <br />
              <br />
              • Lower back pain
              <br />
              • Back and leg pain
              <br />
              • Neck Pain
              <br />
              • Shoulder Pain
              <br />
              • Ankle Pain
              <br />
              • Knee Pain
              <br />
              • Soft Tissue Lower Limb
              <br />
              <br />
              You will be referred to the App by one of our GPs or Physio, or you can self-register by 
              clicking on this link or the App image.</p>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion style={{
            backgroundColor: "white", 
            width: "60vw", 
            borderTop: "solid black 1px",
            borderBottom: "solid black 1px",
            boxShadow: "none"
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"black"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h4 style={{color:"black"}}>getUbetter</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p style={{color: "black", textAlign: "left"}}>The getUBetter app is provided free of charge by Wandsworth for patients registered
              at HeathBridge. It can be accessed on a Smartphone or on the Web and
              guides you day-by-day through a sequence of exercises and tips to help you get better
              from a range of new or recurrent musculoskeletal conditions:
              <br />
              <br />
              • Lower back pain
              <br />
              • Back and leg pain
              <br />
              • Neck Pain
              <br />
              • Shoulder Pain
              <br />
              • Ankle Pain
              <br />
              • Knee Pain
              <br />
              • Soft Tissue Lower Limb
              <br />
              <br />
              You will be referred to the App by one of our GPs or Physio, or you can self-register by 
              clicking on this link or the App image.</p>
            </AccordionDetails>
          </Accordion>
        </div>
    );
};

export default DisplayColomnSection;
