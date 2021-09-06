import Image from "next/image";
import profilePic from "../public/minepic.jpg";
import { FcInspection } from "react-icons/fc";
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
                Fascinated by Computers, Mathematics, Physics, Physical
                Cosmology and Humanities. Seeking for shelter on Mars and
                Proxima Centauri B.
              </p>
              <p>
                I've done my schooling from Kendriya Vidyalaya, Gomti Nagar,
                Lucknow, and currently pursuing Bachelor's of Technology in
                Computer Science Engineering from Babu Banarasi Das National
                Institute of Technology and Management.
              </p>
            </div>
            <button className="btn btn-lg">
              <a href="target" target="_blank">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
