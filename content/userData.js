/*
    EDIT THIS FILE TO CHANGE THE USER DATA
*/

export const introduction = {
    fname: "Arvind",
    mname: "", //Leave blank if don't have any middle name
    sname: "Kumar",
    profession: "Student",
    impressum: "A developer who loves to analyse, code, and optimize.",
    profilePicUrl: "minepic.png",
};

export const socialMedia = {
    twitter: "https://twitter.com/Dazzlerkumar",
    linkedin: "https://www.linkedin.com/in/arvind-kumar-7515a9211/",
    github: "https://github.com/kumarrvind",
    medium: "",
    gmail: "",
};
export const skillStack = {
    frontendStack: {
        html: "html.png",
        css: "css3.png",
        js: "javascript.png",
        ts: "typescript.png",
        angular: "angular.png",
        react: "react.png",
        vue: "",
        bootstrap: "bootstrap.png",
    },
    //If backendStack isn't application, just remove the whole Object backendStack
    backendStack: {
        node: "",
        python: "",
        java: "",
        dotNet: "",
    },
    tools: {
        npm: "npm.png",
        git: "git.png",
    },
};
export const educationDetails = {
    bachelors: {
        //format should be MM YYYY for example - Aug 2018
        tenure: "Dec 2020 - July 2024 (Expected)",
        degreeName: "Bachelor of Technology",
        clgName: "IIT(ISM) Dhanbad",
        majors: "Mineral & Metallurgical",
        gpa: "",
        currentSemOrYear: "6th Semester",
        //If you are currently studying in  bachelors, keep currentlyStudying set to true
        currentlyStudying: true,
        graduationYear: " July 2024 ",
    },
    hsc: {
        //format should be MM YYYY for example - Aug 2018
        tenure: "May 2019",
        degreeName: "High School (12th Grade)",
        clgName: "Javahar Novadaya Vidyalaya, Basti",
        majors: "Mathematics, Physics and Computer Science",
        gpa: "Scored 78.8%",
        board: "CBSE Board",
        //Fill only If you are currently studying in  High School
        currentSemOrYear: "",
        //If you are currently studying in  bachelors, keep currentlyStudying set to true
        currentlyStudying: false,
        graduationYear: " May 2019",
    },
};
export const experienceDetails = {
    experience_1: {
        tenure: "",
        position: "",
        companyName: "",
        desc: ["", "", ""],
    },
    experience_2: {
        tenure: "",
        position: "",
        companyName: "",
        desc: [""],
    },
};
export const resumeLink = {
    link: "#",
};

export const projects = [
    {
        id: 1,
        projectImg: "/project_img1.jpg",
        projectTenure: "Jun 2022",
        projectName: "Resume Styled Portfolio",
        desc_1: " A minimal and elegant design with responsive capabilities.",
        desc_2: " Developed a static Front-End product using NextJS and Bootstrap.",
        desc_3: "Deployed and hosted on Vercel.",
        projectLink: "#",
        repoLink: "https://github.com/dazzlerkumar/dazzlerkumar.github.io",
    },
];
