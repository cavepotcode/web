import './ProjectCard.scss';

export interface ProjectCardProps{
    height: number;
    width: number;
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


export function ProjectCard( {height,width,img,imgX,imgY,title,text,textX,textY, color, gridArea} : ProjectCardProps){
    return(
        <div className="project-card"
            style={{
                gridArea: gridArea,
                height: height+"px",
                width: width+"px",
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
                    src={require(`../../assets/img/projects/${img}.png`).default} alt="" />
            </div>
            <div className='text-wrapper'
                style={{
                    left: textX,
                    top: textY}}
            >
                <label>{text}</label>
            </div>
        </div>
    );
}