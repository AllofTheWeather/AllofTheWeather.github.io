
//each project item contains all the data pertaining to that project in global state

//the structure of the contents of a project are flexible given that each project is unique

//A component scrapes data from the project state and displays it according to its own logic

// for example a preview component will only take certain informations.


// Rule of thumb, never put JSX in the state, or even outside the render cycle

import cvbuilder from "./imgs/cv-builder.png"

export const projectsData = [
    {
        title: "CV Builder",
        img: cvbuilder,
        date: "April 2023",
        link: "https://alloftheweather.github.io/gh-pages-deployment/",
        codebase: "https://github.com/AllofTheWeather/gh-pages-deployment",
        headings: ["Forms and state managment in ReactJS", "Contidtional rendering", "Bootstrap styling"],
        texts: [
            "A web app to make generating proffessional CVs as rapid and easy as possible",
            "I made use of the 'useContext' hook to store user inputted data at an app level, making it globally accessible without the need for unnecessarily complex prop drilling",
            "I used Bootstrap to fast track the layout and styling with some custom javascript to ensure the responsive design was compatible with React."
        ]
    },
    {
        title: "",
        img: "",
        date: "",
        link: "",
        headings: [""],
        texts: [""]
    }
];