import styled from "styled-components";
import { useState } from "react";
export default function navigation() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [click, setclick] = useState('visible');
    var hid = 'visible'
    const clicked =(event)=>{
      console.log("hi")
      console.log(event)
      hid = 'hidden';
    }
    const NavMenu = styled.div`
        display: grid;
        place-items: center;
        position: fixed;
        width: 12rem;
        height: 7rem;
        top: 0;
        right: 6rem;
        visibility:${props=>props.visible};
    `;
    return (
        <div className="nav-div">
            <NavMenu visible={hid} onClick={(e)=>clicked(e)}>
                <div>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                </div>
            </NavMenu>
            {/*
            <div className="nav-menu" onClick={(e)=> setclick('hidden')}>
                
            </div>*/}

            <nav className="navbar">
                <a href="#aboutme" className="nav-link">
                    About Me
                </a>
                <a href="#Resume" className="nav-link">
                    About Me
                </a>
                <a href="#aboutme" className="nav-link">
                    About Me
                </a>
            </nav>
        </div>
    );
}
