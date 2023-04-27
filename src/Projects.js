import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { projectsData } from "./projectData";

// Two different components will interpret the project data

// One will act as a thumbnail that can be expanded upon clicking - this will be on the home page

// The other will be a list item that directs to a new page - this will be on the projects section. It will be more readable and easier to search through


/*   {
    title; "CV Builder",
    img; "cvbuilder",
    date; "April 2023",
    link; "https://alloftheweather.github.io/gh-pages-deployment/",
    codebase; "https://github.com/AllofTheWeather/gh-pages-deployment",
    headings; ["Forms and state managment in ReactJS", "Contidtional rendering", "Bootstrap styling"],
    texts; [
        "A web app to make generating proffessional CVs as rapid and easy as possible",
        "I made use of the 'useContext' hook to store user inputted data at an app level, making it globally accessible without the need for unnecessarily complex prop drilling",
        "I used Bootstrap to fast track the layout and styling with some custom javascript to ensure the responsive design was compatible with React."
    ]
*/


export const Projects = () => {
    return (
        <>

        <h1>Projects</h1>

        <div>
            <label  hidden="hidden">Search Projects</label>
            <input className="form-control-search" type="text" name="search-projects" placeholder="search projects"/>   
        </div>
        
        <ul>
            {
                projectsData.map((item, key) => {
                    return (
                        <li key={key}>
                            <NavLink>
                                
                            </NavLink>
                            <h2>{item.title}</h2>
                            
                            <p>{item.date}</p>

                            <a href={item.link}>visit</a>
                            <a href={item.codebase}>codebase</a>

                            <h3>Skills</h3>
                            <ul>
                                {
                                    item.headings.map((heading, key) => {
                                        return (
                                            <li key={key}>
                                                <p>{heading}</p>
                                            </li>     
                                        )
                                    })
                                }
                            </ul>


                        </li>
                    )
                })
            }
            
        </ul>

        </>
    )
}