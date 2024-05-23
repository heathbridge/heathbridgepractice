import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const NavBar = () => {
    const [displayPopUp, setDisplayPopUp] = useState(false);

    const handleClick = () => {
        setDisplayPopUp((prevState) => {
            return prevState ? false : true;
        })
    }

    return (
        <nav className="nav-container">
            <div className='nav-section'>
                <Toolbar className='nav-toolbar'>
                    <div className='hide-menu'>
                        <Button onClick={handleClick}>
                            <MenuIcon />
                        </Button>
                        {displayPopUp && 
                        <div id="mobile-nav" className="show">
                        <div className="close-div">
                            <Button onClick={handleClick}>
                                <ClearIcon color="white" fontSize="large"/>
                            </Button>
                        </div>
                        <ul className="navlinks-container-mobile">
                            <NavLink className="nav-links" to="heathbridge-practice/" onClick={handleClick}>Home</NavLink>
                            <NavLink to="heathbridge-practice/services" onClick={handleClick}>Services</NavLink>
                            <NavLink to="heathbridge-practice/meet-the-team" onClick={handleClick}>Meet The Team</NavLink>
                            <NavLink to="heathbridge-practice/policies" onClick={handleClick}>Policies</NavLink>
                            <NavLink to="heathbridge-practice/about" onClick={handleClick}>About</NavLink>
                            <NavLink to="heathbridge-practice/other" onClick={handleClick}>Other</NavLink>
                        </ul>
                    </div>
                        }
                    </div>
                    <ul className="navlinks-container">
                        <NavLink to="heathbridge-practice/services">SERVICES</NavLink>
                        <NavLink to="heathbridge-practice/meet-the-team">MEET THE TEAM</NavLink>
                        <NavLink to="heathbridge-practice/policies">POLICIES</NavLink>
                        <NavLink to="heathbridge-practice/about">ABOUT</NavLink>
                        <NavLink to="heathbridge-practice/other">OTHER</NavLink>
                    </ul>
                </Toolbar>
            </div>
        </nav>
    );
};

export default NavBar;