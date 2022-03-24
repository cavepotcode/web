import { useTranslation } from 'react-i18next';
import { AllImages } from '../../../helpers';
import './WhereNameComeFrom.scss'

export function WhereNameComeFrom() {
    const [t] = useTranslation("global");

    return (
        <div className="where-name-come-from">
            <div className="img-wrapper">
                <img className="pot" src={AllImages.AboutUsPot} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="purple" src={AllImages.AboutUsPurple} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="red" src={AllImages.AboutUsRed} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="yellow" src={AllImages.AboutUsYellow} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="purple second" src={AllImages.AboutUsPurple} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="red second" src={AllImages.AboutUsRed} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="yellow second" src={AllImages.AboutUsYellow} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="purple third" src={AllImages.AboutUsPurple} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="red third" src={AllImages.AboutUsRed} alt={t("why-do-we-exist.alt.img.1")} />
                <img className="yellow third" src={AllImages.AboutUsYellow} alt={t("why-do-we-exist.alt.img.1")} />
            </div>
            <div className="text-wrapper">
                <label className="title">{t("name-come-from.title.1")}</label>
                <label className="textpart">{t("name-come-from.text.part.1")}</label><br />
                <label className="title">{t("name-come-from.title.2")}</label>
                <label className="textpart">{t("name-come-from.text.part.2")}</label>

            </div>
        </div>
    );

}