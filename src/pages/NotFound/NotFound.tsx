import data from '../../data/data-web.json'
import { AllImages } from "../../helpers";


import "./NotFount.scss"

export function NotFoundPage(){

    const notFound = data["not-found"]
    
    return(
        <div className="not-found">
            <label>{notFound.title}</label>
            <label>{notFound.subtitle}</label>
            <img src={AllImages.Olla} alt={notFound["alt.img"]} />
        </div>
    );
}