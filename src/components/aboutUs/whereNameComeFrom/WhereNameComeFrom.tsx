import { useTranslation } from 'react-i18next';
import { AllImages } from '../../../helpers';
import './WhereNameComeFrom.scss'

export function WhereNameComeFrom() {
    const [t] = useTranslation("global");

    return (
        <div id="where-name-come-from">
            <div className="where-name-come-from max-container">
                <div className="img-wrapper">
                    <img className="pot" src={AllImages.AboutUsTeam} alt={t("why-do-we-exist.alt.img.1")} />
                    <img className="pot" src={AllImages.AboutUsTeam2} alt={t("why-do-we-exist.alt.img.1")} />
                </div>
                <div className="text-wrapper">
                    <label className="title">{t("name-come-from.title.1")}</label>
                    <label className="textpart">{t("name-come-from.text.part.1")}</label><br/>
                    <label className="textpart">{t("name-come-from.text.part.2")}</label><br/>
                    <label className="textpart">{t("name-come-from.text.part.3")}</label>

                </div>
            </div>
        </div>

    );

}