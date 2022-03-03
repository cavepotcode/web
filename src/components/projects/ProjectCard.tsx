import { useEffect, useState } from 'react';
import { Size } from '../header/Header';
import './ProjectCard.scss';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ProjectCardProps{
    img: string;
    imgX: number;
    imgY: number;
    title: string;
    text: string;
    textX: number;
    textY: number;
    color: string;
    gridArea: string;
}


//const plus = <FontAwesomeIcon icon={faPlusSquare} />

export function ProjectCard( {img,imgX,imgY,title,text,textX,textY, color, gridArea} : ProjectCardProps){

     const [size, setSize] = useState<Size>({width: window.innerWidth,height: window.innerHeight});


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
    

    return(
        <div className="project-card"
            style={{
                gridArea: size.width <= 480 && gridArea === 'auto /span 2' ? "auto /span 1" : gridArea,
                backgroundColor: color}}
        >
            <div className='title'>
                <label>{title}</label>
            </div>
            <div className='img-wrapper'
                style={{
                    left: imgX,
                    top: imgY}}
            >
                <img 
                    src={require(`../../assets/img/projects/${img}.png`).default} alt={`project ${img} card image`} />
            </div>
            <div className='text-wrapper'
                style={{
                    left: textX,
                    top: textY}}
            >
                <label>{text}</label>
            </div>
            <div className='card-footer'>
                <NavLink to={`/projects/${img}`}>
                    <button>
                        +
                    </button>
                </NavLink>
            </div>
        </div>
    );
}