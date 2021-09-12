import animationData from "/public/webdesigner.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Intro() {
    return (
        <div className="about-me-div">
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
                            <div>
                                <p>
                                    My life in two lines,
                                    <br />
                                    <span>
                                        Sometimes Code, Sometimes Write,
                                        <br />
                                        On a journey to live a better life.
                                    </span>
                                </p>
                                <p>
                                    Worked as a part-time Front-End Website
                                    Developer for about 1 year in two start-ups
                                    with experience building User Interfaces of
                                    websites using Angular 12 and NextJs
                                    (ReactJS) frameworks.
                                </p>
                                <p>
                                    I describe myself as a focused, fast
                                    learner, curious and grateful person. I see
                                    and find patterns in day-to-day life, and
                                    keep optimizing my daily life.
                                </p>
                            </div>
                            <button className="btn btn-lg">
                                <a
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1reHamDrvvufz4xGTEliNDL9KMHWC3Dwd/view?usp=sharing"
                                >
                                    Resume
                                </a>
                            </button>
                        </div>
                    </div>
                    {/*END of ABOUT ME BODY */}
                </div>
            </div>
        </div>
    );
}
