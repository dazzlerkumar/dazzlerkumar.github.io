//CUSTOM LIBs
import {socialMedia, introduction} from "../content/userData"


import Image from "next/image";
import twt from "../public/twitter.png";
import lin from "../public/linkedin.png";
import git from "../public/github.png";
import medium from "../public/medium.png";



export default function Intro() {
    
    return (
        <div className="intro-div">
            {/*Start OF HERO*/}
            <div className="container">
                <div className="hero">
                    {/*NAME AND POSITION SECTION*/}
                    <div className="sub-hero-1 col-md-4 d-flex justify-content-end align-items-end">
                        <div className="name-position-box">
                            <p className="current-profile">
                               {introduction.profession}
                            </p>
                            <p className="name">
                                {introduction.fname}
                                <br />
                                {introduction.mname}
                                {/*Implies the line breaker only if there is any middle-name*/}
                                {introduction.mname === ''?'':<br/>}
                                {introduction.sname}
                            </p>
                        </div>
                    </div>
                    {/*END of NAME AND POSITION SECTION*/}
                    {/*Start of Main Profile*/}
                    <div className="sub-hero-2 col-md-4  profile-pic-div">
                        <img
                            className="profilePic"
                            src={introduction.profilePicUrl}
                            alt="Picture of the Developer"
                        />
                    </div>
                    {/*End of Main Profile*/}
                    {/*Start of Main Impressum*/}
                    <div className="sub-hero-3 col-md-4">
                        <div className="line"></div>
                        <p>
                            {introduction.impressum}
                        </p>
                    </div>
                </div>
            </div>
            {/*END OF HERO*/}
            <div className="social-media d-flex align-items-center">
                <div className="container d-flex justify-content-around">
                    <a target="_blank" rel="noreferrer" href={socialMedia.twitter}>
                        <Image src={twt} quality={100} alt="twitter Icon" />
                    </a>
                    <a target="_blank"  rel="noreferrer" href={socialMedia.linkedin}>
                        <Image src={lin} quality={100} alt="LinkedIn Icon" />
                    </a>
                    <a target="_blank" rel="noreferrer" href={socialMedia.github}>
                        <Image src={git} quality={100} alt="twitter Icon" />
                    </a>
                    <a target="_blank" rel="noreferrer" href={socialMedia.medium}>
                        <Image src={medium} quality={100} alt="twitter Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}
