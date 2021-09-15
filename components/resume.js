
import animationData from "/public/books.json";

import { Player } from "@lottiefiles/react-lottie-player";


function resume() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="resume-div">
            <div className="container">
                <p className="super-heading">Resume</p>
                <div className="resume-body d-flex justify-content-center">
                    <div className="col-md-5 web-designer">
                    <Player
                            autoplay
                            loop
                            src={animationData}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </div>
                    <div className="d-flex col-md-7">
                        <div className="line-3"></div>
                        <div className="about-me-para">
                            <div>
                                <p>
                                    I've done my schooling from Kendriya
                                    Vidyalaya, Gomti Nagar, Lucknow, and
                                    currently pursuing Bachelor's of Technology
                                    in Computer Science Engineering from Babu
                                    Banarasi Das National Institute of
                                    Technology and Management.
                                </p>
                            </div>
                            <h2 className="skill-heading">What I Know</h2>
                            <div className="skill">
                                <h4 className="skill-headings">Front End</h4>
                                <div className="skill-icons">
                                    <div className="d-flex icon-frame">
                                        <img src="html.png" />
                                        <img src="css3.png" />
                                        <img src="javascript.png" />
                                    </div>
                                    <div className="d-flex icon-frame">
                                        <img src="typescript.png" />

                                        <img src="angular.png" />
                                        <img src="react.png" />
                                    </div>
                                    <div className="d-flex icon-frame">
                                        <img src="bootstrap.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h4 className="skill-headings">Back End</h4>
                                <div className="d-flex skill-icons">
                                    <div className="d-flex icon-frame">
                                        <img src="node-js.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h4 className="skill-headings">Tools</h4>
                                <div className="d-flex skill-icons">
                                    <div className="d-flex icon-frame">
                                        <img src="npm.png" />
                                        <img src="git.png" />
                                    </div>
                                </div>
                            </div>
                            {/*EDUCATION AND EXPERIENCE DIV*/}
                            <div className="d-flex">
                                {/*EDUCATION*/}
                                <div id="education-div">
                                    <h2 className="skill-heading">Education</h2>
                                    <div className="skill">
                                        {/*Graduation*/}
                                        <p className="skill-tenure">
                                            Aug 2018 - July 2022 (Expected)
                                        </p>
                                        <h4 className="ed-headings">
                                        Bachelor of Technology
                                        </h4>
                                        <div className="ed-details">
                                            <h6>BBDNITM LUCKNOW</h6>
                                            <p>
                                                <ul>
                                                    <li>
                                                    Major in Computer Science
                                                    </li>
                                                    <li>
                                                    Cumulative GPA: 7.29 till 6th Semester
                                                    </li>
                                                    <li>
                                                    Expected Graduation: May 2022
                                                    </li>
                                                    
                                                </ul>
                                            </p>
                                        </div>
                                        {/*End of Graduation*/}
                                       {/*High School*/}
                                       <p className="skill-tenure">
                                            Qualified in 2018
                                        </p>
                                        <h4 className="ed-headings">
                                        High School (12th Grade)
                                        </h4>
                                        <div className="ed-details">
                                            <h6>Kendriya Vidyalaya Gomti Nagar</h6>
                                            <p>
                                                <ul>
                                                    <li>
                                                    CBSE Board
                                                    </li>
                                                    <li>
                                                    Scored 71%
                                                    </li>
                                                    <li>
                                                    Mathematics, Physics and Computer Science
                                                    </li>
                                                    
                                                </ul>
                                            </p>
                                        </div>
                                        {/*End of Graduation*/}
                                    </div>
                                </div>
                                {/*END of EDUCATION*/}
                                {/*EXPERIENCE*/}
                                <div id="experience-div">
                                    <h2 className="skill-heading">
                                        Experience
                                    </h2>
                                    <div className="skill">
                                        {/*Latest Experience*/}
                                        <p className="skill-tenure">
                                            Jun 2021 - Aug 2021
                                        </p>
                                        <h4 className="ed-headings">
                                            Frontend Developer Intern
                                        </h4>
                                        <div className="ed-details">
                                            <h6>Doorpix</h6>
                                            <p>
                                                <ul>
                                                    <li>
                                                        Developed a fully
                                                        functional Front-End
                                                        product using NextJS and
                                                        Bootstrap.
                                                    </li>
                                                    <li>
                                                        Integrated Front-End
                                                        components with RESTful
                                                        APIs.
                                                    </li>
                                                    <li>
                                                        Collaborated with
                                                        designers to enhance the
                                                        user experience of the
                                                        website.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                        {/*End of Latest Experience*/}
                                        {/*Previous Experience*/}
                                        <p className="skill-tenure">
                                        MAY 2021 – JUNE 2021
                                        </p>
                                        <h4 className="ed-headings">
                                        Data Analytics Intern
                                        </h4>
                                        <div className="ed-details">
                                            <h6>THE SPARKS FOUNDATION</h6>
                                            <p>
                                                <ul>
                                                    <li>
                                                    Analyzed the scoring ability of students in an exam using Machine Learning Algorithm
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                        {/*End of Previous Experience*/}
                                    </div>
                                </div>
                                {/*End of Experience*/}
                            </div>
                            <button className="btn btn-lg">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://drive.google.com/file/d/1reHamDrvvufz4xGTEliNDL9KMHWC3Dwd/view?usp=sharing"
                                >
                                   Download Resume
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default resume;
