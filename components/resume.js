import Lottie from "react-lottie";
import animationData from "/public/books.json";
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
                <p className="about-me-heading">Resume</p>
                <div className="resume-body d-flex justify-content-center">
                    <div className="col-md-5  web-designer">
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className="col-md-2 line-3"></div>
                    <div className="col-md-5 about-me-para">
                        <div>
                            <p>
                                I've done my schooling from Kendriya Vidyalaya,
                                Gomti Nagar, Lucknow, and currently pursuing
                                Bachelor's of Technology in Computer Science
                                Engineering from Babu Banarasi Das National
                                Institute of Technology and Management.
                            </p>
                        </div>
                        <h2 className="skill-heading">What I Know</h2>
                        <div className="skill">
                            <h4 className="skill-headings">Front End</h4>
                            <div className="d-flex skill-icons">
                                <img src="html.png" />
                                <img src="css.png" />
                                <img src="javascript.png" />
                                <img src="typescript.png" />

                                <img src="angular.png" />
                                <img src="react.png" />
                                <img src="bootstrap.png" />
                            </div>
                        </div>
                        <div className="skill">
                            <h4 className="skill-headings">Back End</h4>
                            <div className="d-flex skill-icons">
                                <img src="node-js.png" />
                            </div>
                        </div>
                        <div className="skill">
                            <h4 className="skill-headings">Tools</h4>
                            <div className="d-flex skill-icons">
                                <img src="npm.png" />
                                <img src="postman.png" />
                                <img src="figma.png" />
                            </div>
                        </div>
                        <h2 className="skill-heading">Education</h2>
                        <div className="skill">
                            <h4 className="ed-headings">
                                Bachelors of Technology
                            </h4>
                            <div className="ed-details">
                                <p>Graduating in 2022</p>
                                <p>currently 7.29 CGPA</p>
                                <p>
                                    Dr. APJ Abdul Kalam Technical Univesity,
                                    Lucknow
                                </p>
                            </div>
                            <h4 className="ed-headings">High School (10+2)</h4>
                            <div className="ed-details">
                                <p>Graduated in 2018</p>
                                <p>with 71%</p>
                                <p>
                                    Central Board of Secondary Education (CBSE),
                                    India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default resume;
