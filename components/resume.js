//CUSTOM LIBs
import { educationDetails, experienceDetails, skillStack, resumeLink } from "../content/userData";


import animationData from "/public/books.json";
import { Player } from "@lottiefiles/react-lottie-player";

/**
 * 
 * Resume Section 
 * @param sectionID is given to the root element of Resume Functional Component
 * Returns the details of the person such as Education, Experience and skills
 *
 */

function Resume({sectionID}) {
    
    return (
        <div className="resume-div" id={sectionID}>
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
                                    Iapos;ve done my schooling from Kendriya
                                    Vidyalaya, Gomti Nagar, Lucknow, and
                                    currently pursuing Bachelor'apos;s of Technology
                                    in Computer Science Engineering from Babu
                                    Banarasi Das National Institute of
                                    Technology and Management.
                                </p>
                            </div>
                            <h2 className="skill-heading">What I Know</h2>
                            {skillStack.frontendStack ? 
                            <div className="skill">
                                <h4 className="skill-headings">Front End</h4>
                               
                                <div className="skill-icons">
                                    <div className="d-flex icon-frame">
                                        <img alt={skillStack.frontendStack.html} src={skillStack.frontendStack.html} />
                                        <img alt={skillStack.frontendStack.css} src={skillStack.frontendStack.css}/>
                                        <img alt={skillStack.frontendStack.js} src={skillStack.frontendStack.js} />
                                    </div>
                                    <div className="d-flex icon-frame">
                                        <img alt={skillStack.frontendStack.ts} src={skillStack.frontendStack.ts} />

                                        <img alt={skillStack.frontendStack.angular} src={skillStack.frontendStack.angular} />
                                        <img alt={skillStack.frontendStack.reactjs} src={skillStack.frontendStack.react} />
                                    </div>
                                    <div className="d-flex icon-frame">
                                        <img alt={skillStack.frontendStack.bootstrap} src={skillStack.frontendStack.bootstrap}/>
                                    </div>
                                </div>
                               
                            </div>
                            :''}
                            {skillStack.backendStack ? 
                            <div className="skill">
                                <h4 className="skill-headings">Back End</h4>
                               
                                <div className="d-flex skill-icons">
                                    <div className="d-flex icon-frame">
                                        <img alt={skillStack.backendStack.node} src={skillStack.backendStack.node}/>
                                    </div>
                                </div>
                               
                            </div>
                            : ''}
                            {skillStack.tools ? 
                            <div className="skill">
                                <h4 className="skill-headings">Tools</h4>
                                
                                <div className="d-flex skill-icons">
                                    <div className="d-flex icon-frame">
                                        <img alt={skillStack.backendStack.npm} src={skillStack.tools.npm} />
                                        <img alt={skillStack.backendStack.git} src={skillStack.tools.git}/>
                                    </div>
                                </div>
                                
                            </div>
                            :
                            ''}
                            {/*EDUCATION AND EXPERIENCE DIV*/}
                            <div className="d-flex">
                                {/*EDUCATION*/}
                                <div id="education-div">
                                    <h2 className="skill-heading">Education</h2>
                                    <div className="skill">
                                        {/*Graduation*/}
                                        <p className="skill-tenure">
                                            {educationDetails.bachelors.tenure}
                                        </p>
                                        <h4 className="ed-headings">
                                            {educationDetails.bachelors.degreeName}
                                        </h4>
                                        <div className="ed-details">
                                            <h6>
                                                {educationDetails.bachelors.clgName}
                                            </h6>
                                            <p>
                                                <ul>
                                                    <li>
                                                        Majors in{" "}
                                                        {
                                                            educationDetails.bachelors
                                                                .majors
                                                        }
                                                    </li>
                                                    <li>
                                                        Cumulative GPA :
                                                        {
                                                            educationDetails.bachelors
                                                                .gpa
                                                        }{" "}
                                                        till{" "}
                                                        {
                                                            educationDetails.bachelors
                                                                .currentSemOrYear
                                                        }
                                                    </li>
                                                    <li>
                                                        {educationDetails.bachelors
                                                            .currentlyStudying
                                                            ? "Expected Graduation "
                                                            : ""}
                                                            {" "}:{' '}
                                                        {
                                                            educationDetails.bachelors
                                                                .graduationYear
                                                        }
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                        {/*End of Graduation*/}
                                        {/*High School*/}
                                        <p className="skill-tenure">
                                            {educationDetails.hsc.currentlyStudying ? "": "Qualified in"}
                                            {educationDetails.hsc.graduationYear}
                                        </p>
                                        <h4 className="ed-headings">
                                            {educationDetails.hsc.degreeName}
                                        </h4>
                                        <div className="ed-details">
                                            <h6>
                                                {educationDetails.hsc.clgName}
                                            </h6>
                                            <p>
                                                <ul>
                                                    <li>{educationDetails.hsc.board}</li>
                                                    <li>{educationDetails.hsc.gpa}</li>
                                                    <li>
                                                        {educationDetails.hsc.majors}
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
                                            {experienceDetails.experience_1.tenure}
                                        </p>
                                        <h4 className="ed-headings">
                                            {experienceDetails.experience_1.position}
                                        </h4>
                                        <div className="ed-details">
                                            <h6>{experienceDetails.experience_1.companyName}</h6>
                                            <p>
                                                <ul>
                                                    {
                                                        experienceDetails.experience_1.desc.map(
                                                            (d, i) =>
                                                            <li key={i}>
                                                                {d}
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </p>
                                        </div>
                                        {/*End of Latest Experience*/}
                                        {/*Previous Experience*/}
                                        <p className="skill-tenure">
                                            {experienceDetails.experience_2.tenure}
                                        </p>
                                        <h4 className="ed-headings">
                                            {experienceDetails.experience_2.position}

                                        </h4>
                                        <div className="ed-details">
                                            <h6>{experienceDetails.experience_2.companyName}</h6>
                                            <p>
                                                <ul>
                                                    {
                                                        experienceDetails.experience_2.desc.map(
                                                            (d, i) =>
                                                            <li key={i}>
                                                                {d}
                                                            </li>
                                                        )
                                                    }
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
                                    href={resumeLink.link}
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

export default Resume;
