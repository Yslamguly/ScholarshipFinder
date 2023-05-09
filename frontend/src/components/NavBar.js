import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import icon from '../img/icons/menu-line.png';
import "../styles/NavBar.css";
import DropdownNavBar from "./DropdownNavBar";
import {useAuth} from "../utils/auth/UserContext";

export default function NavBar() {
    const { user,setUser } = useAuth();

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/home" className="nav-logo">

                    <i className="fas fa-code"></i>
                </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={"nav-item"}>
                <DropdownNavBar/>
            </li>
            <li className="nav-item">
                <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    About
                </NavLink>
            </li>

            {user ? <li className="nav-item">
                <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    {user.name}
                </NavLink>
            </li> : <li className="nav-item">
                <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                    Log In
                </NavLink>
            </li>}
        </ul>
        <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}><img src={icon} alt="menu"></img></i>
        </div>
        </div>
</nav>
</>
)
    ;
}
