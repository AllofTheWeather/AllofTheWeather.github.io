import cbn1 from './imgs/Colour by Night Homepage.png'
import cbn2 from './imgs/cbn2.png'
import cbn3 from './imgs/cbn3.png'
import cbn4 from './imgs/cbn4.png'
import cbnhooks from './imgs/cbn-hooks.png'

let project = {
    title: "Colour by Night",
    subtitle: "An online flyer for an event at a local nightclub",
    date: "September 2022",
    images: [
    ],
    sections: [
        {
            content: 
            <img className="full-screen-image" src={cbn1} alt="homepage"></img>
        },
        {
            content: 
            <>
                <div className="large-block small-margin">
                    <h2 className="heading">An online flyer for an event at a local nightclub</h2>
                    <h3 className="sub-heading">September 2022</h3>
                </div>
            </>
        },
        {
            title: "",
            content: 
            <div class="grid">
                <img src={cbn2} alt="phone-view-1" className="flex-image"></img>
                <img src={cbn3} alt="phone-view-2" className="flex-image"></img>
                <img src={cbn4} alt="phone-view-3" className="flex-image"></img>
            </div>
        }
        ,
        {
            title: "",
            content:         
            <div>
                    <h3 className="heading small-block small-margin">Required ultra responsive design as the majority of interactions would be via mobile devices</h3>
            </div>
        },
        {
            content:    
                    <>
                        <ul>
                            <li className="no-bullets heading small-block">Single page design</li>
                            <li className="no-bullets small-block">An active nav class responds to a custom hook that listens to whether or not components are onscreen</li>
                        </ul>
                    </>
        },
        {
            content:
                <button className="button center"><a className="red" href="https://github.com/AllofTheWeather/colour-by-night">See Code »</a></button>
        },
        {
            content:    
                    <>
                        <h3 className="heading small-margin">Learnings</h3>
                        <ul className="sub-heading small-margin">
                            <li>React directory structure is very customizable and can make or break a project</li>
                            <li>Custom hooks can be used to add project specific modular functionality</li>
                            <li>Simpler designs are more easily adapted to changes in screen size</li>
                            <li>The importance of graphic design principles such as space, contrast and type choice</li>
                        </ul>
                    </>
        }
    ]
}

export default function ProjectPost() {
    return (
        <>
            <div className="header-offset"></div>
        {
            project.sections.map((section, index) => {
                        return (
                            <section>
                                {section.content}
                            </section>
                        )
            })
        }
        </>
    )
}