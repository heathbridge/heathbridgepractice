import Header from "../Components/Templates/Header";
import TopSection from "../Components/Templates/TopSection";
import drBarnes from "../assets/staff/dr-katherine-barnes_edited.jpg"
import drBailey from "../assets/staff/dr-tom-bailey_edited.jpg"
import drUbayasiri from "../assets/staff/IMG_8290_edited.jpg"
import drAllen from "../assets/staff/Dr Chris Allen_edited_edited.webp"
import drHallett from "../assets/staff/PH profile Pic_edited_edited.webp"
import drPremilaAllen from "../assets/staff/PA picture_edited_edited.jpg"
import drTK from "../assets/staff/Dr Tom Koczian sq_edited_edited_edited.jpg"
import drEV from "../assets/staff/ev_001.jpg"
import drAT from "../assets/staff/anita.jpg"
import drOS from "../assets/staff/OS profile picture_edited_edited.jpg"
import drHL from "../assets/staff/helen.jpg"
import drSL from "../assets/staff/Sam-removebg-preview.png"
import drAS from "../assets/staff/anna.jpg"
import drVP from "../assets/staff/vikki.jpg"
import JoFlint from "../assets/staff/2024-05-08 14.03.11.jpg"
import drCL from "../assets/staff/conrad.jpg"
import kL from "../assets/staff/Screenshot (303).png"
import rP from "../assets/staff/Screenshot (304).png"
import lS from "../assets/staff/lisa.jpeg"
import sJ from '../assets/staff/Sarah Jolly edit_edited.jpg'
import cW from '../assets/staff/charlene-watts_edited.jpg'
import dT from '../assets/staff/photo_2024-05-16 11.20.27.jpeg'
import lC from '../assets/staff/Lesley Costa edit_edited.jpg'
import fU from '../assets/staff/faiza.jpeg'
import sS from '../assets/staff/shahil2.jpg'
import wB from "../assets/staff/Will-removebg-preview.png"
import sK from "../assets/staff/simran-removebg-preview.png";
import kD from "../assets/staff/photo_2024-05-22 15.46.38.jpeg";

import JF from "../assets/nonClinical-staff/A7E8A835-2464-4000-8164-35F98D31FB0D_edited_edited_edited_edited.jpg"
import CED from "../assets/nonClinical-staff/Ced2.jpg"
import SIMONA from "../assets/nonClinical-staff/SD profile pic_edited_edited_edited_edited_edited.jpg"
import KUAN from "../assets/nonClinical-staff/KP profile pic_edited_edited.jpg"
import sarahW from "../assets/nonClinical-staff/sarahW.jpg"

import CHARLOTTLE from "../assets/nonClinical-staff/CD profile pic_edited_edited_edited.jpg"

import traceyC from "../assets/nonClinical-staff/tracey c.jpeg"

import chris from "../assets/nonClinical-staff/chris.jpeg"

import dan from "../assets/nonClinical-staff/dan.jpeg"

import jayB from "../assets/nonClinical-staff/jayb.jpeg"

import jan from "../assets/nonClinical-staff/Jan.jpeg"

import johan from "../assets/nonClinical-staff/johan3.jpeg"

import mel from "../assets/nonClinical-staff/MJ Profile Pic_edited.jpg"

import carmene from "../assets/nonClinical-staff/carmene.jpeg"

import rita from "../assets/nonClinical-staff/rita.jpeg"

import Hilary from '../assets/nonClinical-staff/Hilary-Hodgson.jpg'

import traceyS from '../assets/nonClinical-staff/traceyS.jpeg'

import steven from '../assets/nonClinical-staff/Steven.jpg'

import ven from '../assets/nonClinical-staff/ven.jpeg'

import jeel from '../assets/nonClinical-staff/jeel.jpeg'

import alisa from '../assets/nonClinical-staff/Alisa_update-removebg-preview (1).png'

import charlottleY from '../assets/nonClinical-staff/Charlotte_Young-removebg-preview (2).png'

import jaya from '../assets/nonClinical-staff/photo_2024-05-21 10.46.52.jpeg'



import { clinicians, nonClinicians } from "../Data-Assets/data-assets";

const cliniciansImgArray = [drBarnes, JoFlint, drBailey, drUbayasiri, drAllen, drHallett, drPremilaAllen, drTK, drHL, drSL, drCL,drVP, drOS, drAS, drAT, drEV, kL, rP, Hilary , sJ,lS, lC, dT, cW, sS, fU, wB, sK, kD];
const nonCliniciansImgArray = [JF, SIMONA, CED, KUAN, CHARLOTTLE, sarahW, traceyC, alisa, carmene, charlottleY, chris, dan, jan, jayB, jaya, jeel, johan, mel,  rita, steven, traceyS, ven];


const MeetTheTeam = () => {
    return (
        <div className="info-container">
            <Header title="Meet The Team" />
            <div className="info-section">
                <TopSection />
                <div className="general-container">
                    <div className="general-service-card-mtt" >
                        <h2 className="sub-h2 sub-title">Clinical</h2>
                        <h3>Meet our clinical team made of Doctors, <a href="https://www.healthcareers.nhs.uk/explore-roles/medical-associate-professions/roles-medical-associate-professions/physician-associate">Physicians Associates,</a> Nurses, Pharamacist, First Contact Practitioners, Social prescriber and Healthcare Assistants</h3>
                        <br />
                        <div className="team-section">
                            <div className="team-list-container">
                                {clinicians.map((clinician, i) => {
                                    return (
                                        <div className="team-member-card" key={`${clinician.name}-${i}`}>
                                            <img src={cliniciansImgArray[i]} className="staff-img" alt={` of ${clinician.name}`} />
                                            <div className="doctor-bio-section">
                                                <h3 className="doctor-name">{clinician.name}</h3>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <h2 className="sub-h2 sub-title">Non Clinical</h2>
                        <h3>Meet our dedicated non clinical team made of Managers, Administrators and Care Navigators </h3>
                        <br />
                        <div className="team-section">
                            <div className="team-list-container">
                                {nonClinicians.map((teamMember, i) => {
                                    return (
                                        <div className="team-member-card" key={`${teamMember.name}-${i}`}>
                                            <img src={nonCliniciansImgArray[i]} className="staff-img" alt={`of ${teamMember.name}`} />
                                            <div className="doctor-bio-section">
                                                <h3 className="doctor-name">{teamMember.name}</h3>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;