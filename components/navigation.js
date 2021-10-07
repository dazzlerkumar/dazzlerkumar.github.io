import styled from "styled-components";
import { useState } from "react";
export default function Navigation() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [MenuClass, setMenuClass] = useState("");
    const [BarClass, setBarClass] = useState("hide-navbar");


    const navClickFunc = () => {
        //console.log("Menu " + click);
        setMenuClass("hide-nav-menu")
        setBarClass("navbar")
    };
    const hideNavLinks = () => {
        //console.log("Link " + click);
        setMenuClass("")
        setBarClass("hide-navbar")
    };

    //Styled Component
    const NavMenu = styled.div`
        display: grid;
        place-items: center;
        position: fixed;
        width: 12rem;
        height: 7rem;
        top: 0;
        right: 6rem;
    `;
    const NavLink = styled.a`
        font-size: 1.5rem;
        font-family: "Sorts Mill Goudy", sans-serif;
        font-weight: 700;
        text-decoration: none;
        color: #ebe7e0;
        z-index: 100;    
    `;
    return (
        <div className="nav-div">
            
                <NavMenu className={MenuClass}  onClick={() => navClickFunc()}>
                    <div>
                        <div className="nav-line"></div>
                        <div className="nav-line"></div>
                        <div className="nav-line"></div>
                    </div>
                </NavMenu>
            
                <nav className={BarClass} onClick={() => hideNavLinks()}>

                    <NavLink href="#top" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink href="#aboutme" className="nav-link">
                        About Me
                    </NavLink>
                    <NavLink href="#resume" className="nav-link">
                        Resume
                    </NavLink>
                    <NavLink href="#project" className="nav-link">
                        Projects
                    </NavLink>
                </nav>
            
        </div>
    );
}

