import { useTranslation } from "react-i18next";
import { AllImages } from "../../helpers";


import "./NotFount.scss"

export function NotFoundPage(){
    const [t] = useTranslation("global");
    
    return(
        <div className="not-found">
            <label>404</label>
            <label>NOT FOUND</label>
            <img src={AllImages.Olla} alt={t("how-we-do-it.alt.img.1")} />
        </div>
    );
}