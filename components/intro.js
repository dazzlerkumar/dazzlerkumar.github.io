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
                                Frontend Developer
                            </p>
                            <p className="name">
                                Deepak
                                <br />
                                Kumar
                            </p>
                        </div>
                    </div>
                    {/*END of NAME AND POSITION SECTION*/}
                    {/*Start of Main Profile*/}
                    <div className="sub-hero-2 col-md-4  profile-pic-div">
                        <img
                            className="profilePic"
                            src="minepic.png"
                            alt="Picture of the author"
                        />
                    </div>
                    {/*End of Main Profile*/}
                    {/*Start of Main Impressum*/}
                    <div className="sub-hero-3 col-md-4">
                        <div className="line"></div>
                        <p>
                            I'm currently studying
                            <br /> Computer Science Engineering <br />
                            at BBDNITM, Lucknow.
                            <br /> and free-lancing as a Frontend Developer.
                        </p>
                    </div>
                </div>
            </div>
            {/*END OF HERO*/}
            <div className="social-media d-flex align-items-center">
                <div className="container d-flex justify-content-around">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Dazzlerkumar">
                        <Image src={twt} quality={100} alt="twitter Icon" />
                    </a>
                    <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/dazzlerkumar/">
                        <Image src={lin} quality={100} alt="LinkedIn Icon" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/dazzlerkumar">
                        <Image src={git} quality={100} alt="twitter Icon" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://medium.com/@dazzlerkumar">
                        <Image src={medium} quality={100} alt="twitter Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}
