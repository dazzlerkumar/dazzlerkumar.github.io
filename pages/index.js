//LIBS
import Head from "next/head";
import styles from "../styles/Home.module.css";

//COMPONENTS

import Intro from "../components/intro";
import Aboutme from "../components/aboutme";
import Resume from "../components/resume";
import Project from "../components/projects";

/**
 *
 * Home page where all the sections are being called as Compnents
 *
 */

export default function Home() {
    let blackBackground = [
        "font-size: 38px",
        "background-color: #000",
        "color: #52d273",
        
        "padding:0.5rem",
        "border: 3px groove #52d273",
    ].join(" ;");
    let sec = [
        "font-size: 16px",
        "background-color: #333",
        "color: #e95065",
    ].join(" ;");
    let third = [
        "font-size: 16px",
        "background-color: #333",
        "color: #46bddf ",
        "padding:0.5rem",
        "border: 1px groove #52d273",
    ].join(" ;");
    
    console.log("%c Hello Hacker! 👨‍💻", blackBackground);
    console.log("%c I'm %O", sec, {
        name: "Deepak Kumar",
        age: "21",
        occupation: "Frontend Developer",
    });
    console.log(
        "%cSince, you've made it to here. I'd like to be in contact with you. Email me at dazzler.deepak98@gmail.com",
        third,
        
        
    );

    return (
        <div>
            <Head>
                <title>Deepak Kumar</title>
                <meta name="author" content="Deepak Kumar" />
                <meta
                    name="Description"
                    content="Deepak Kumar aka Dazzler kumar | Frontend Developer | If you can think it, I can web it."
                />
                <meta
                    name="keywords"
                    content="Deepak Kumar, Dazzler Kumar, Frontend developer, website developer, bbdnitm, babu banarasi das, lucknow, web developer in lucknow,  "
                />
                <link rel="icon" href="/indian-man.png" />
            </Head>
            <Intro sectionID={"top"} />
            <Aboutme sectionID={"aboutme"} />
            <Resume sectionID={"resume"} />
            <Project sectionID={"project"} />

            <footer className={styles.footer}></footer>
        </div>
    );
}
