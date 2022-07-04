/*
    EDIT THIS FILE TO CHANGE THE USER DATA
*/

export const introduction = {
    fname: "Deepak",
    mname: "", //Leave blank if don't have any middle name
    sname: "Kumar",
    profession: "Frontend Engineer",
    impressum: "A developer who loves to analyse, code, and optimize.",
    profilePicUrl: "minepic.png",
};

export const socialMedia = {
    twitter: "https://twitter.com/Dazzlerkumar",
    linkedin: "https://www.linkedin.com/in/dazzlerkumar/",
    github: "https://github.com/dazzlerkumar",
    medium: "https://medium.com/@dazzlerkumar",
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
        node: "node-js.png",
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
        tenure: "Aug 2018 - July 2022 (Expected)",
        degreeName: "Bachelor of Technology",
        clgName: "BBDNITM LUCKNOW",
        majors: "Computer Science",
        gpa: " 7.29",
        currentSemOrYear: "6th Semester",
        //If you are currently studying in  bachelors, keep currentlyStudying set to true
        currentlyStudying: true,
        graduationYear: " May 2022",
    },
    hsc: {
        //format should be MM YYYY for example - Aug 2018
        tenure: "May 2018",
        degreeName: "High School (12th Grade)",
        clgName: "Kendriya Vidyalaya Gomti Nagar",
        majors: "Mathematics, Physics and Computer Science",
        gpa: "Scored 71%",
        board: "CBSE Board",
        //Fill only If you are currently studying in  High School
        currentSemOrYear: "",
        //If you are currently studying in  bachelors, keep currentlyStudying set to true
        currentlyStudying: false,
        graduationYear: " May 2018",
    },
};
export const experienceDetails = {
    experience_1: {
        tenure: "Jun 2021 - Aug 2021",
        position: "Frontend Developer Intern",
        companyName: "Doorpix",
        desc: [
            "Developed a fully functional Front-End product using NextJS and Bootstrap.",
            "Integrated Front-End components with RESTful APIs.",
            "Collaborated with designers to enhance the user experience of the website.",
        ],
    },
    experience_2: {
        tenure: "May 2021 – Jun 2021",
        position: "Data Analytics Intern",
        companyName: "THE SPARKS FOUNDATION",
        desc: [
            "Analyzed the scoring ability of students in an exam using Machine Learning Algorithm",
        ],
    },
};
export const resumeLink = {
    link: "https://drive.google.com/file/d/1bluE5IvqAnDakfF2-FoQULJntfxDq1UZ/view?usp=sharing",
};

export const projects = [
    {
        id:1,
        projectImg: "/tgit.png",
        projectTenure: "Oct 2021",
        projectName: "The Great Indian Traffic - Indian Road Guide",
        desc_1: "Making Indian roads safer.",
        desc_2: "Developed a static Front-End product using NextJS and Tailwind CSS.",
        desc_3: "Open Sourced it and participated in Hacktoberfest 2021.",
        projectLink:"https://tgit.vercel.app/",
        repoLink: "https://github.com/dazzlerkumar/The-Great-Indian-Traffic/",
    },

    {
        id:2,
        projectImg: "/project_img1.png",
        projectTenure: "Jun 2021 - Aug 2021",
        projectName: "Resume Styled Portfolio",
        desc_1: " A minimal and elegant design with responsive capabilities.",
        desc_2: " Developed a static Front-End product using NextJS and Bootstrap.",
        desc_3: "Deployed and hosted on Vercel.",
        projectLink: "https://dazzlerkumar.vercel.app/",
        repoLink: "https://github.com/dazzlerkumar/dazzlerkumar.github.io",
    },
    {
        id:3,
        projectImg: "/angularecommerce.png",
        projectTenure: "April 2021 - Jun 2021",
        projectName: "AngularlyEcommerce",
        desc_1: " A fully functional and beautiful eCommerce frontend.",
        desc_2: " Developed using Angular 12 and Bootstrap.",
        desc_3: "Deployed and hosted on Firebase.",
        projectLink: "https://angularlyecommerce.web.app/",
        repoLink: "https://github.com/dazzlerkumar/AngularlyEcommerce",
    },
    
    {
        id:4,
        projectImg: "/bookmonger_ss.png",
        projectTenure: "Jun 2019 - Jul 2019",
        projectName: "BookMonger - A Book Exchange portal",
        desc_1: "A heaven website for avid book readers.",
        desc_2: "Developed a dynamic responsive full product using WAMP stack and Bootstrap.",
        desc_3: "Collaborated with my classmate to develop it.",
        projectLink:
            "https://drive.google.com/file/d/1anlup4VBHpdcGsotbAPDpnxkBCDVWhr5/view?usp=sharing",
        repoLink: "https://github.com/dazzlerkumar/bookmonger",
    }
    
];
