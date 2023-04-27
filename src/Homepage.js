import { NavLink } from "react-router-dom"
import ProjectGallery from "./ProjectGallery"

export const Homepage = () => {
    return (
        <>

        <div className="header-offset">
            
        </div>

            <section className="text-section">
                <h2 className="large-block sub-title text-align-center">
                Hello!
                </h2>
                <p className="sub-heading text-align-center">I’m a driven self-taught developer with a knack for consistently grasping new concepts, and a desire to learn.</p>

            </section>

            <section className="slide-show large-block">
                <section className="text-section">
                    <h2 className="heading">Projects</h2>
                </section>

                <ProjectGallery />

            </section>


            <section className="text-section">
                <a href="/experience">
                    <h2 className="heading">Experience</h2>
                    <h3 className="text">
                        I have developed excellent communication skills that allow me to become an asset in any team. I can be welcoming, friendly, increase moral and, resolve conflict in a polite and professional manner.
                    </h3>
                    <div className="content">
                        <button className="button center">See my CV</button>
                    </div>
                </a>
            </section>

            <br />
        </>
    )
}