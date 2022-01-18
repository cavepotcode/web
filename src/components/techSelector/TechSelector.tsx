import { useField } from "formik";
import React, { useEffect, useState } from "react";
import './TechSelectos.scss';

export interface TechSelectosPorps {
    name: string;
    techs: any;
}

export function TechSelector({ name, techs }: TechSelectosPorps) {
    const [_,__,helpers] = useField(name);
    const [activeClasses, setActiveClasses] = useState(techs);

    const toggleClass = (option: any) => {
        activeClasses[option] = !activeClasses[option];
        const newArray = {...activeClasses}
        setActiveClasses(newArray);
    };

    useEffect( () => {
        helpers.setValue(activeClasses);
    },[activeClasses]);

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