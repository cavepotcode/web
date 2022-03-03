import { useTranslation } from "react-i18next";
import { AllImages } from "../../helpers";


import "./NotFount.scss"

export function NotFoundPage(){
    const [t] = useTranslation("global");
    
    return(
        <div className="not-found">
            <label>{t("not-found.title")}</label>
            <label>{t("not-found.subtitle")}</label>
            <img src={AllImages.Olla} alt={t("not-found.alt.img")} />
        </div>
    );
}