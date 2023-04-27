import { projectsData } from "./projectData";
import { NavLink } from "react-router-dom";

export default function ProjectGallery() {
    return (
        <>
        <div className="block">
            <ul className="flex-wrap">
                {
                    projectsData.map((item, key) => {
                        return (
                            <li key={key} className="gallery-item square " style={{"background-image": "url(" + item.img + ")"}}>
                                    <a className="fill-parent hover-wrapper" href={item.link}>
                                        <div className="become-visible overlay flex-center" style={{"background-color": "rgba(255, 255, 255, 0.8)"}}>
                                        
                                            <h2 className="heading">{item.title}</h2>
                                            <p className="sub-heading">{item.date}</p>
                                            <p className="">{item.texts[0]}</p>
                                        </div> 
                                    </a>
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
        </>
    )
}  