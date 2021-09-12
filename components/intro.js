

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
            <div className="basic-info">
                <div className="container d-flex justify-content-around">
                    <p>
                        Born
                        <br />
                        <span>2001</span>
                    </p>
                    <p>
                        Experience
                        <br />
                        <span>1+ Years</span>
                    </p>
                    <p>
                        Highest Qualifications
                        <br />
                        <span>10+2</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
