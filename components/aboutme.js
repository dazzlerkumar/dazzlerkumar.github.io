import animationData from "/public/webdesigner.json";
import { Player } from "@lottiefiles/react-lottie-player";

/**
 *
 * Resume Section
 * @param sectionID is given to the root element of Resume Functional Component
 * Returns brief summary about the person
 *
 */

export default function Aboutme({ sectionID }) {
    return (
        <div className="about-me-div" id={sectionID}>
            <div className="container">
                {/*SUPER HEADING*/}
                <p className="super-heading">About Me</p>
                {/*ABOUT ME BODY */}
                <div className="about-me-body d-flex justify-content-center">
                    <div className="col-md-5 web-designer">
                        <Player
                            autoplay
                            loop
                            src={animationData}
                            style={{ height: "80%", width: "80%" }}
                        ></Player>
                    </div>
                    <div className="d-flex col-md-7">
                        <div className="line-2"></div>
                        <div className="about-me-para">
                            <p>
                                My life in two lines,
                                <br />
                                <span>
                                    Sometimes Code, Sometimes Write,
                                    <br />
                                    On a journey to live a better life.
                                </span>
                            </p>
                            {/*   <p>
                            Worked as a part-time Front-End Website Developer for about 3 months in a start-up with 
experience building User Interfaces of the website using the NextJS (ReactJS) framework.

                            </p> */}
                            <p>
                                I describe myself as a focused, fast learner,
                                curious and grateful person. I see and find
                                patterns in day-to-day life, and keep optimizing
                                my daily life.
                            </p>
                        </div>
                    </div>
                    {/*END of ABOUT ME BODY */}
                </div>
            </div>
        </div>
    );
}
