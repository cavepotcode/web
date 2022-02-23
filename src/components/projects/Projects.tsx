import "./Projects.scss";
import { useTranslation } from 'react-i18next';
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export function Projects(){
    const [t] = useTranslation("global");
    const projects = Object.values(t('projects.projects', { returnObjects: true }));

    return(
        <div className="projects">
            <div className="textwrapper">
                <label className="title">{t("projects.title")}</label>

            </div>
            <div className="project-card-wrapper">
                {
                    projects.map((obj : ProjectCardProps,key) => (
                        <ProjectCard img={obj.img}
                                    imgX={obj.imgX}
                                    imgY={obj.imgY}
                                    title={obj.title}
                                    text={obj.text}
                                    textX={obj.textX}
                                    textY={obj.textY}
                                    color={obj.color}
                                    gridArea={obj.gridArea}></ProjectCard>
                    ))
                }
            </div>
        </div>
        
    );
}