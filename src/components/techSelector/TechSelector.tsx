import React, { useState } from "react";
import './TechSelectos.scss';

export interface TechSelectosPorps {
    name: string;
    techs: any[];
}

export function TechSelector({ name, techs }: TechSelectosPorps) {
    const [activeClasses, setActiveClasses] = useState(techs);

    const toggleClass = (option: any) => {
        const newArray = {...activeClasses}
        newArray[option] = !newArray[option];
        setActiveClasses(newArray);
    };
    return (
        <div className="img-wrapper">
            {
                Object.keys(activeClasses).map((tech,index) => (
                    <div key={index} className={activeClasses[tech] ? 'selected' : 'no-selected'} onClick={() => toggleClass(tech)}>
                        <img src={require(`../../assets/img/${tech}.png`).default} alt="" />
                    </div>
                ))
            }
        </div>
    )
}