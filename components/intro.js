

export default function Intro() {
  return (
    <div className="intro-div">
      <div className="container d-flex">
        <div className="col-md-4 d-flex flex-column justify-content-end">
          <p className="current-profile">Final Year CS UnderGrad</p>
          <p className="name">
            Deepak
            <br />
            Kumar
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="profilePic"
            src="minepic.png"
            alt="Picture of the author"
          />
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <div className="line"></div>
          <p>
            I'm currently studying
            <br /> Computer Science Engineering <br />
            at BBDNITM, Lucknow.
            <br /> I love play with CSS and JS.
          </p>
        </div>
      </div>
      <div className="basic-info ">
        <div className="container d-flex justify-content-around">
        <p>Born<br/><span >2001</span></p>
        <p>Experience<br/><span>1+ Years</span></p>
        <p>Highest Qualifications<br/><span >10+2</span></p>
        </div>
      </div>
    </div>
  );
}
