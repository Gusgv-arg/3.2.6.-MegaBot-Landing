import { Link, NavLink } from "react-router-dom"
import chatbot from "../assets/Personaje.jpeg";
import { useState } from "react";
import "./NavBar.css"

export const NavBar = (props) => {
    const [activeLink, setActiveLink] = useState("");

    const menuItems = ["Sobre Mi"];

    return (
        <>
            <div className="nav-container">
                <div>
                    <Link to="/" >
                        <div>
                           {/*  <img
                                src={chatbot}
                                alt="chatbot" 
                                className="image"        
                            /> */}
                            <span>MegaBot</span>
                        </div>
                    </Link >
                </div>

                <div className="menu-items">
                    {
                        menuItems.map((item, index) => (
                            
                            <span key={`${item}-${index}`}>
                                <NavLink
                                    className={activeLink === item ? "active-link" : ""}
                                    onClick={() => setActiveLink(item)}
                                    to={`/${menuItems[index]}`}                                    
                                >
                                    {item}
                                </NavLink>
                            </span>
                        ))
                    }
                </div>
            </div>
        </>
    )
}