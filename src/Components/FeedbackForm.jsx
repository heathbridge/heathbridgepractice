import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const FeedbackForm = () => {

    const [formSubmitted, setForSubmitted] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setForSubmitted(true);
    }

    return (
        <div className='feedback-form-div'>
            <form className='feedback-form' onSubmit={handleSubmit}>
                <h3>Feedback Form</h3>
                {formSubmitted ? 
                <p>Thank you for your feedback</p>
                 :
                 <div>
                    <FormControl id="feedback-form-formControl">
                    <FormLabel id="patient-feedback">Overall, how was your experience of our service?</FormLabel>
                    <br />
                    <RadioGroup
                        row
                        aria-labelledby="patient-feedback"
                        name="patient-feedback-buttons"
                    >
                    <Grid container spacing={2}>
                        <Grid xs={6} md={4}>
                            <FormControlLabel value="very-good" control={<Radio />} label="Very Good"/>
                        </Grid>
                        <Grid xs={6} md={4}>
                            <FormControlLabel value="good" control={<Radio />} label="Good" />
                        </Grid>
                        <Grid xs={6} md={4}>
                            <FormControlLabel value="neither-good-nor-poor" control={<Radio />} label="Neither good nor poor" />
                        </Grid>
                        <Grid xs={6} md={4}>
                            <FormControlLabel value="poor" control={<Radio />} label="Poor" />
                        </Grid>
                        <Grid xs={6} md={4}>
                            <FormControlLabel value="very-poor" control={<Radio />} label="Very Poor" />
                        </Grid>
                        <Grid xs={6} md={4}>
                            <FormControlLabel value="Dont-know" control={<Radio />} label="Don't know" />
                        </Grid>
                    </Grid>
                    </RadioGroup>
                </FormControl>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <FormLabel label="tell-us-why"/>
                <br />
                <TextField style={{width: "30vw", zIndex:0}} id="outlined-basic" label="Please can you tell us why you gave your answer?" variant="outlined" name='tell-us-why'/>
                </Box>
                <Button variant='contained' type='submit'>Submit</Button>
                 </div>
                }
            </form>
        </div>
    )
};

export default FeedbackForm;