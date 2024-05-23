import FAQ from "../Components/FAQ";
import DisplayAbout from "../Components/Homepage/DisplayAbout";
import Header from "../Components/Templates/Header";
import TopSection from "../Components/Templates/TopSection";
import Grid from '@mui/material/Unstable_Grid2';
import Iframe from "react-iframe";
import starIcon from '../assets/Icons/star.png'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { reviews } from "../Data-Assets/data-assets";

const theme = createTheme({
    palette: {
        hblue: {
            main: "#46ccd5",
            contrastText: '#ffffff',
        },
    }
  });

const About = () => {
    return (
        <div className="info-container">
            <Header title="About" />
            <div className="info-section">
                <TopSection />
                <div className="general-container">
                    <FAQ />
                    <div className="general-service-card">
                        <h2 className="sub-title">Get to know us</h2>
                        <DisplayAbout />
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9943.576150630253!2d-0.2149881!3d51.4601019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f124ec43e91%3A0x7fff5306149eb80f!2sThe%20Heathbridge%20Practice!5e0!3m2!1sen!2suk!4v1711538083349!5m2!1sen!2suk" width="auto" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                        <br></br>
                        <br></br>
                        <div className="reviews-container">
                            <br></br>
                            <h2 className="review-h2">Reviews</h2>
                            <br></br>
                            <br></br>
                            <Grid container spacing={3}>
                                {reviews.map((review) => {
                                    const rating = [];

                                    for (let i = 0; i < review.stars; i++) {
                                        rating.push(<img key={`star-${i}`} src={starIcon} alt="star" />)
                                    }

                                    return (
                                        <Grid xs={12} md={6} key={`review-${review.id}`} className='review-card'>
                                            <div className="top-review-card">
                                                <h4 className='review-title'>"{review.title}"</h4>
                                                {rating.map((reviewStars) => reviewStars)}
                                            </div>
                                            <div className="info-review-card">
                                                <h4 className='review-name'>by {review.name}</h4>
                                                <h5 className='review-date'>{review.date}</h5>
                                            </div>
                                            <p className="review-post">{review.post}</p>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                            <br></br>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color='hblue' style={{width:'320px', justifySelf: "center"}} onClick={() => {
                                    window.open('https://www.nhs.uk/services/gp-surgery/heathbridge-practice/H85061/ratings-and-reviews?currentpage=1')
                                }}>See More Reviews</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;