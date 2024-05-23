import { NavLink } from "react-router-dom";
import iconOne from "../../assets/Icons/3678411_hospital_medical_nurse_health_heart_icon.png";
import iconTwo from "../../assets/Icons/3678441_building_hospital_icon.png";
import iconThree from "../../assets/Icons/3678444_drug_hospital_icon.png";
import iconFour from "../../assets/Icons/3678413_doctor_hospital_medical_stethoscope_icon.png";
import iconFive from "../../assets/Icons/3678408_health_heart rate monitor_hospital_icon.png";
import iconSix from "../../assets/Icons/3678406_ambulance_hospital_icon (1).png"
import { services } from "../../Data-Assets/data-assets";

const DisplayServicesList = () => {
    const icons = [iconOne, iconTwo, iconThree, iconFour, iconFive, iconSix];

    const handleOnClick = () => {
        window.open("https://florey.accurx.com/p/H85061")
    }

    const handleOnClickSelfRefer = () => {
        window.open("https://florey.accurx.com/p/H85061/self-referral")
    }


    return (
        <div className="serviceslist-containers">
            <div className="card-row">
                {icons.map((icon, i) => {

                    if (i !== 1 && i !== 3) {
                        return (
                            <div className="service-card" key={`${services[i].title}-${i}`}>
                                <NavLink to={`/heathbridge-practice/${services[i].link}`} style={{textDecoration: "none", color: "rgb(19, 74, 176)"}}>
                                    <div className="card-hover">
                                        <div className="icon-container">
                                            <img src={icon} className="icon" alt={`for ${services[i].title}`}/>
                                        </div>
                                        <h3 className="card-title" style={{textDecoration: "none"}}>{services[i].title}</h3>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    } else if (i === 1){
                        return (
                            <div className="service-card" key={`${services[i].title}-${i}`} onClick={handleOnClick}>
                                <div style={{textDecoration: "none", color: "rgb(19, 74, 176)"}}>
                                    <div className="card-hover">
                                        <div className="icon-container">
                                            <img src={icon} className="icon" alt={`icon for ${services[i].title}`}/>
                                        </div>
                                        <h3 className="card-title" style={{textDecoration: "none"}}>{services[i].title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (i === 3) {
                        return (
                            <div className="service-card" key={`${services[i].title}-${i}`} onClick={handleOnClickSelfRefer}>
                                <div style={{textDecoration: "none", color: "rgb(19, 74, 176)"}}>
                                    <div className="card-hover">
                                        <div className="icon-container">
                                            <img src={icon} className="icon" alt={`icon for ${services[i].title}`}/>
                                        </div>
                                        <h3 className="card-title" style={{textDecoration: "none"}}>{services[i].title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    return icon ? true : false;
                })}
            </div>
        </div>
    );
};

export default DisplayServicesList;