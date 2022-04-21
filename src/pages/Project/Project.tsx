import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import "./Project.scss"

export function Project() {
    let params = useParams();
    const [t] = useTranslation("global");
    const [project, setProject] = useState(params.id);
    const [projects, setProjects] = useState(t('projects.projects', { returnObjects: true }));
    return (
        <div id="project">
            <div className="half">
                <div className="text">
                    {
                        projects[project]?.description.map((paragraph: any, key) => {
                            return <div className="paragraph">
                                <h2>{paragraph.title}</h2>
                                <p>{paragraph.desc}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={`half ${project}`}></div>
        </div>
    );
}