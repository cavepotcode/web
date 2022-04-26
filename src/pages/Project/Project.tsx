import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { callbackify } from "util";
import "./Project.scss"

export function Project() {
    let params = useParams();
    const [t] = useTranslation("global");
    const navigate = useNavigate();
    const [project, setProject] = useState(params.id);
    const [projects, setProjects] = useState(t('projects.projects', { returnObjects: true }));
    useEffect(()=>{
        if (!projects[project]) {
            console.log('no hay nadie')
            navigate('/404')
        }
    })
    
    return (
        <div id="project">
            <div className="half">
                <div className="text">
                    {
                        projects[project]?.description?.map((paragraph: any, key) => {
                            return <div className="paragraph">
                                <h2>{paragraph.title}</h2>
                                <p>{paragraph.desc}</p>
                            </div>
                        })
                    }
                </div>
                <a href={t("links.header.contact-us.link")}>
                    <button className={project}>{t('projects.button')}</button>
                </a>
            </div>
            <div className={`half ${project}`}>
            {
                        projects[project]?.imgs?.map((imgName: any, key) => {
                            return <div className="square" style={{
                                backgroundImage: `url(${require(`../../assets/img/projects/${projects[project].img}/${imgName}.png`).default})`,
                                top: `calc(${key*175}px + 10%)`
                            }}></div>                                                            
                        })
                    }
            </div>
        </div>
    );
}