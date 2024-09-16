import { useEffect, useState } from 'react';
import './ProjectCard.scss';
import { NavLink } from 'react-router-dom';
import { url } from 'inspector';

export interface ProjectCardProps {
    id: string;
    img: string;
    imgX: number;
    imgY: number;
    title: string;
    text: string;
    textX: number;
    textY: number;
    color: string;
    w: string;
    gridArea: string;
    link?: string
}

export interface Size {
  width: number;
  height: number;
}

export function ProjectCard({ id, img, imgX, imgY, title, text, textX, textY, color, w, gridArea, link }: ProjectCardProps) {

    const [size, setSize] = useState<Size>({ width: window.innerWidth, height: window.innerHeight });


    const resizeHanlder = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setSize({
            width: width,
            height: height,
        });
    };

    useEffect(() => {
        window.onresize = resizeHanlder;
    }, []);


    return (
        <NavLink to={link ? link : `/project/${id}`} target="_blank" className={id ==='contact' ? "project-card-contact" : "project-card"}
                style={{
                    gridArea: size.width <= 480 && gridArea === 'auto /span 2' ? "auto /span 1" : gridArea,
                    backgroundColor: color
                }}
            >
                <div className='title'>
                    <label>{title}</label>
                </div>
                <div className='img-wrapper'
                    style={{
                        left: imgX,
                        top: imgY,
                        width: `${w}%`,
                        backgroundImage: `url(${require(`../../assets/img/projects/${img}.png`).default})`

                    }
                    }
                >

                </div>
                <div className='text-wrapper'
                    style={{
                        left: textX,
                        top: textY
                    }}
                >
                    <label>{text}</label>
                </div>
        </NavLink>
    );
}