import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Projects = () => {
    return (
        <>
            <div id="top" className="header-offset"></div>

            <h1 className="heading small-margin">Portfolio</h1>

            <section className="small-margin">
                <Outlet />
            </section>
        </>
    )
}

const projectComponentList = [
    {
        title: 'Colour by Night',
        date: 'sep 22',
        excerpt: 'An online flyer for an event at a local nightclub',
        slug: 'CbN'

    },
    {
        title: 'CCP Search Ontology',
        date: 'oct 22 - present',
        excerpt: 'I developed a full stack web app using the python flask framework. The client had developed a ml application which could be run on jupyter notebook. •	Firstly, I refactored the notebook cells into a python library to make the codebase more manageable. Secondly, I created a user interface with flask. Finally, I built a flask api to handle user requests, run the refactored backend code, and display it to the user.',
        slug: 'CCP'
    },
    {   title: 'My Online CV',
        date: 'jan 23',
        excerpt: 'I built this site using React.Js because I wanted to demonstrate my ability in one the leading front-end web frameworks. It uses a single page design with all routing managed by React. This has the benefit of allowing smoother transitions between pages and improved load times between component renderings making it the ideal for building non-static sites that focus on user interaction.',
        slug:'CVProject'
    },
    {
        title: 'Ontonomic',
        date: 'oct 22 - nov 22',
        excerpt: 'A front end project for Ontonomic. The static design was simple to construct. I used Wordpress for rapid development and deployment.',
        slug: 'Ontonomic'
    },
    {
        title: 'SiteScan',
        date: 'dec 22 - present',
        excerpt: 'A static front end multi page site for a small business based in Staffordshire. Developed using Flask.',
        slug: 'Scan'
    },
    {
        title: 'Auric Design',
        date: 'nov 22',
        excerpt: 'Wordpress Consultant for design firm. The work waas not technically demanding but I learnt a lot of interpersonal proffesional skills.',
        slug: 'Auric'
    }
]

const charPositions = (str, char) => {

    const indexes = [];

    for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        indexes.push(i);
    }};

    return indexes
}

const textBodyShortener = (text, noOfWords) => {
    
    const spacePositions = charPositions(text, ' ');

    return text.slice(0, spacePositions[noOfWords]);
}

export const ProjectList = () => {
    return (
            <ul className="grid no-pad">
                {
                projectComponentList.map((project, index) => {
                    return (
                        
                        <div className="project-grid-item grid-border block content" key={index}>
                            <NavLink className="clickable" to=":{project.slug}">
                            <div className="content square">
                                <div className="border">
                                    <h1 className="no-pad no-margin heading">{project.title}</h1>
                                    <h2 className="no-pad no-margin sub-heading">{project.date}</h2>
                                </div>
                                <div className="text">
                                    <p className="body excerpt">{textBodyShortener(project.excerpt, 25)}...</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <button className="button">Read More »</button>
                            </div>
                            </NavLink>
                        </div>
                       
                    )
                })
                }
            </ul>
    )
}

export const ProjectListPreview = () => {
    return (
        <ul className="grid-overflow no-pad">
            {
            projectComponentList.map((project, index) => {
                return (
                    <div className="project-grid-item grid-border block" key={index}>
                    <NavLink className="clickable" to=":{project.slug}">
                        <div>
                            <h1 className="no-pad no-margin heading">{project.title}</h1>
                            <h2 className="no-pad no-margin sub-heading">{project.date}</h2>
                        </div>
                        <p className="body excerpt">{textBodyShortener(project.excerpt, 25)}...</p>
                        <button className="button center bottom">Read More »</button>
                    </NavLink>
                    </div>
                )
            })
            }
        </ul>
)
}