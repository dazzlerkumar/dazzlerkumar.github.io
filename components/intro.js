//CUSTOM LIBs
import { socialMedia, introduction } from "../content/userData";

import Image from "next/image";
import LightSpeed from "react-reveal/LightSpeed";
import twt from "../public/twitter.png";
import lin from "../public/linkedin.png";
import git from "../public/github.png";
import medium from "../public/medium.png";

/**
 *
 * Resume Section
 * @param sectionID is given to the root element of Resume Functional Component
 * This is the Hero and takes the whole viewport
 * displays the name and designation of the person
 * displays the person's picture
 * displays a tagline/slogan
 * all 3 things are stacked vertically using flexbox
 *
 */

export default function Intro({ sectionID }) {
    return (
        <div className="intro-div" id={sectionID}>
            {/*Start OF HERO*/}

            <div className="container">
                <div className="hero">
                    {/*NAME AND POSITION SECTION*/}
                    <div className="sub-hero-1 col-md-4 d-flex justify-content-end align-items-end">
                        <div className="name-position-box">
                            <div className="name-box">
                                <span className="name">A</span>
                                <span className="name">R</span>
                                <span className="name">V</span>
                                <span className="name">I</span>
                                <span className="name">N</span>
                                <span className="name">D</span>
                            </div>
                        </div>
                    </div>
                    {/*END of NAME AND POSITION SECTION*/}
                    {/*Start of Main Profile*/}
                    <div className="sub-hero-2 col-md-4  profile-pic-div">
                        <img
                            className="profilePic"
                            src={introduction.profilePicUrl}
                            alt="Picture of the Developerr"
                        />
                    </div>
                    {/*End of Main Profile*/}
                    {/*Start of Main Impressum*/}
                    <div className="sub-hero-3 col-md-4">
                        <div className="name-box">
                            <span className="name">K</span>
                            <span className="name">U</span>
                            <span className="name">M</span>
                            <span className="name">A</span>
                            <span className="name">R</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*END OF HERO*/}
            <div className="social-media d-flex align-items-center">
                <LightSpeed left duration={2000}>
                    <div className="container d-flex justify-content-around">
                       {/*  <a
                            target="_blank"
                            rel="noreferrer"
                            href={socialMedia.twitter}
                        >
                            <Image src={twt} quality={100} alt="twitter Icon" />
                        </a> */}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={socialMedia.linkedin}
                        >
                            <Image
                                src={lin}
                                quality={100}
                                alt="LinkedIn Icon"
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={socialMedia.github}
                        >
                            <Image src={git} quality={100} alt="twitter Icon" />
                        </a>
                       
                    </div>
                </LightSpeed>
            </div>
        </div>
    );
}
