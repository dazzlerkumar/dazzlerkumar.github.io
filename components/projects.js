//LIBS
import { useState } from "react";

//ASSETS
import Image from "next/image";
import prj1 from "../public/project_img1.png";
import repoIcon from "../public/repo.png";
import linkIcon from "../public/project_link.png";
import bookmonger from "../public/bookmonger_ss.png";
import certificate_icon from "../public/certificate_icon.png";

function Projects() {
    

    return (
        <div className="project-div">
            <div className="container">
                <p className="super-heading">My Projects</p>
                {/*PROJECT INTRO*/}
                <div className="project-body d-flex justify-content-center">
                    <div className="col-md-3 web-designer"></div>
                    <div className="d-flex col-md-6">
                        <div className="line-4"></div>
                        <div className="project-intro">
                            <q>
                                {" "}
                                The application of acquired knowledge is the key
                                to success.{" "}
                            </q>
                            <figcaption>
                                — Mohd. Rashid,{" "}
                                <cite>My High School Chemistry Teacher</cite>
                            </figcaption>
                        </div>
                    </div>
                </div>
                {/*PROJECT CARDS*/}
                <div className="card-flex d-flex flex-column align-items-center">
                    {/*1ST PROJECT CARD*/}
                    <div
                        className="project-card d-flex justify-content-center"
                       
                    >
                        {/*PROJECT IMAGE*/}
                        <div className="project-img-div">
                            <Image
                                alt="Mountains"
                                src={prj1}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                        {/*PROJECT DETAILS*/}
                        <div className="project-details">
                            <p className="project-date">Jun 2021 - Aug 2021</p>
                            <h4 className="project-heading">
                                Resume Styled Portfolio
                            </h4>

                            <p>
                                <ul>
                                    <li>
                                        A minimal and elegant design with
                                        responsive capabilities.
                                    </li>
                                    <li>
                                        Developed a static Front-End product
                                        using NextJS and Bootstrap.
                                    </li>
                                    <li>Deployed and hosted on Vercel.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="project-links d-flex flex-column justify-content-around">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://dazzlerkumar.vercel.app/"
                            >
                                <Image
                                    src={linkIcon}
                                    quality={100}
                                    width={36}
                                    height={36}
                                    alt="Project Link"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/dazzlerkumar/dazzlerkumar.github.io"
                            >
                                <Image
                                    src={repoIcon}
                                    quality={100}
                                    width={36}
                                    height={36}
                                    alt="Repo Link"
                                />
                            </a>
                        </div>
                    </div>
                    {/*END of 1ST PROJECT CARD*/}
                    {/*2ST PROJECT CARD*/}
                    <div
                        className="project-card d-flex justify-content-center"
                       
                    >
                        {/*PROJECT IMAGE*/}
                        <div className="project-img-div">
                            <Image
                                alt="BookMonger Screenshot"
                                src={bookmonger}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                width={320}
                                height={240}
                            />
                        </div>
                        {/*PROJECT DETAILS*/}
                        <div className="project-details">
                            <p className="project-date">Jun 2019 - Jul 2019</p>
                            <h4 className="project-heading">
                                BookMonger - A Book Exchange portal
                            </h4>

                            <p>
                                <ul>
                                    <li>
                                        A heaven website for avid book readers.
                                    </li>
                                    <li>
                                        Developed a dynamic responsive full
                                        product using WAMP stack and Bootstrap.
                                    </li>
                                    <li>
                                        Collaborated with my classmate to
                                        develop it.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="project-links d-flex flex-column justify-content-around">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://drive.google.com/file/d/1anlup4VBHpdcGsotbAPDpnxkBCDVWhr5/view?usp=sharing"
                            >
                                <Image
                                    src={certificate_icon}
                                    quality={100}
                                    width={36}
                                    height={36}
                                    alt="Project Link"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/dazzlerkumar/bookmonger"
                            >
                                <Image
                                    src={repoIcon}
                                    quality={100}
                                    width={36}
                                    height={36}
                                    alt="Repo Link"
                                />
                            </a>
                        </div>
                    </div>
                    {/*END of 2ST PROJECT CARD*/}
                </div>
            </div>
        </div>
    );
}

export default Projects;
