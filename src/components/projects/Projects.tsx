import "./Projects.scss";
import { Trans, useTranslation } from 'react-i18next';
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export function Projects(){
    const [t] = useTranslation("global");
    const projects = t('projects.projects', { returnObjects: true });
    const keys = Object.keys(projects);

    return(
        <div className="projects">
            <div className="textwrapper">
                <label className="title">{t("projects.title")}</label>
                <p className="desc"><Trans>{t("projects.desc")}</Trans></p>
            </div>
            <div className="project-card-wrapper">
                {
                    keys.map((id : string,key) => {
                        let obj = projects[id]
                        return (<ProjectCard img={obj.img}
                                    imgX={obj.imgX}
                                    imgY={obj.imgY}
                                    title={obj.title}
                                    text={obj.text}
                                    textX={obj.textX}
                                    textY={obj.textY}
                                    color={obj.color}
                                    w = {obj.w}
                                    gridArea={obj.gridArea}
                                    link={obj.link}></ProjectCard>)
                    })
                }
            </div>
        </div>
        
    );
}