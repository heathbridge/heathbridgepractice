import logo from "../assets/Logo.webp"
import { NavLink } from "react-router-dom";

const DisplayHeader = () => {

    return (
        <div className="header-container">  
            <NavLink to='/heathbridge-practice'className="logo-link-a" ><img src={logo} className="logo" alt="the heathbridge practice logo"/></NavLink>
            <ul className="header-information-container">
                <li ><p><span className="header-txt" style={{fontWeight: "600"}}>OPENING TIMES:</span> MONDAY - TUESDAY: 8AM - 8:30PM & WEDNESDAY - FRIDAY: 8AM - 6:30PM</p></li>
                <li className="header-txt"><p><span className="header-txt" style={{fontWeight: "600"}}>TELEPHONE:</span> (020) 8246 4070 from Monday to Friday: 8am - 6:30pm</p></li>
                <li ><p><span className="header-txt" style={{fontWeight: "600"}}>ADDRESS:</span> 125 Upper Richmond Rd, London SW15 2TL</p></li>
            </ul>
        </div>
    );
};

export default DisplayHeader;