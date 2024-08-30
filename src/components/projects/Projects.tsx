import "./Projects.scss";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import { useFetch } from "../../hooks";

export function Projects(){
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
    
    const { data } = useFetch(`${apiBaseUrl}/projects`);
    let keys = []
    if(data){
        keys = Object.keys(data?.projects);
    }

    return(
        <div className="projects">
            <div className="textwrapper">
                <label className="title">{data?.title}</label>
            </div>
            <div className="project-card-wrapper">
                {
                    keys?.map((id : string,key) => {
                        let obj = data?.projects[id]
                        if(!obj.img) return (<></>)
                        return (<ProjectCard img={obj?.img}
                                    imgX={obj?.imgX}
                                    imgY={obj?.imgY}
                                    title={obj?.title}
                                    text={obj?.text}
                                    textX={obj?.textX}
                                    textY={obj?.textY}
                                    color={obj?.color}
                                    w = {obj?.w}
                                    gridArea={obj?.gridArea}
                                    link={obj?.link} key={`projectKey_${key}`}></ProjectCard>)
                    })
                }
            </div>
        </div>
        
    );
}