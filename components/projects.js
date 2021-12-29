//LIBS

//CUSTOM LIBs
import { projects } from "../content/userData";

//ASSETS
import Image from "next/image";

import repoIcon from "../public/repo.png";
import linkIcon from "../public/project_link.png";

/**
 * 
 * Resume Section 
 * @param sectionID is given to the root element of Resume Functional Component
 * Returns a list of projects done by the person
 *
 */

function Projects({ sectionID }) {
    return (
        <div className="project-div" id={sectionID}>
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
                    {projects.map((x) => (
                        <div
                            className="project-card d-flex justify-content-center"
                            key={x.id}
                        >
                            {/*PROJECT IMAGE*/}
                            <div className="project-img-div">
                                <Image
                                    alt="Project Image"
                                    src={x.projectImg}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={75}
                                />
                            </div>
                            {/*PROJECT DETAILS*/}
                            <div className="project-details">
                                <p className="project-date">
                                    {x.projectTenure}
                                </p>
                                <h4 className="project-heading">
                                    {x.projectName}
                                </h4>

                                <p>
                                    <ul>
                                        <li>{x.desc_1}</li>
                                        <li>{x.desc_2}</li>
                                        <li>{x.desc_3}</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="project-links d-flex flex-column justify-content-around">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={x.projectLink}
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
                                    href={x.repoLink}
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
