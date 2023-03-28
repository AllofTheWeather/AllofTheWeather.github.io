import { NavLink } from "react-router-dom"
import  { Experience } from "./Experience";
import { CV } from "./CV"

export const Skills = () => {
    return (
        <>
            <div className="header-offset"></div>
                <div className="small-block small-margin">
                    <NavLink to="/home"><h1 className="title clickable">Joe Weatherall</h1></NavLink>
                    <h2 className="tagline">front end developer</h2>
                </div>

        <div className="small-margin">
            < Experience />
            <CV />
        </div>
        <div className="large-block" />
        <article>
            <section className="small-margin small-block">
                <h3 class="heading">
                    Markup
                </h3>
                <p class="body">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </p>
            </section>
            <section className="small-margin small-block">

                <h3 class="heading">
                    Languages
                </h3>
                <p class="body">
                    <ul>
                        <li>Python</li>
                        <li>Javascript</li>
                    </ul>
                </p>
            </section>

            <section className="small-margin small-block">

                <h3 class="heading">
                    Frameworks
                </h3>
                <p class="body">
                    <ul>
                        <li>ReactJS</li>
                        <li>Flask</li>
                    </ul>
                </p>
            </section>

            <section className="small-margin small-block">
                    <h3 class="heading">
                        Content Management Systems
                    </h3>
                    <p class="body">
                        <ul>
                            <li>Wordpress</li>
                        </ul>
                    </p>
            </section>

            <section className="small-margin small-block">
                <h3 class="heading">
                    Tools
                </h3>
                <p class="body">
                    <ul>
                        <li>Virtual Studio Code</li>
                        <li>Git</li>
                        <li>.NET</li>
                    </ul>
                </p>
            </section>

        <a href="/contact">
            <button className="button center">Get in touch</button>
        </a>
        </article>
        </>
    )
}