
import Lottie from "react-lottie";
import animationData from "/public/webdesigner.json";

export default function Intro() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="about-me-div">
      <div className="container">
        <p className="about-me-heading">About Me</p>
        <div className="about-me-body d-flex justify-content-center">
          <div className="col-md-5  web-designer">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className="col-md-2 line-2"></div>
          <div className="col-md-5 about-me-para">
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
              Worked as a part-time Front-End Website Developer for about 1 year 
              in two start-ups with experience building
              User Interfaces of websites using Angular 12 and NextJs (ReactJS) frameworks.
              </p>
              <p>
              
I describe myself as a focused, fast learner, curious and grateful person. I see and find patterns in day-to-day life,
and keep optimizing my daily life.

              </p>
            </div>
            <button className="btn btn-lg">
              <a href="https://drive.google.com/file/d/1EvbWzEDwSAB2OW-41rBunOm3y-hP58vh/view?usp=sharing">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
