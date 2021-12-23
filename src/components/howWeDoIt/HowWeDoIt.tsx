import { useTranslation } from 'react-i18next';
import './HowWeDoIt.scss';
export const HowWeDoIt = () => {
    const [t] = useTranslation("global");

    return (
        <div id="how-we-do-it" className="how-we-do-it">
            <label className="title">{t("how-we-do-it.title")}</label>
            <div className="text-wrapper">
                <label>
                    {t("how-we-do-it.text1.part.1")}
                    <span>{t("how-we-do-it.text1.part.2")}</span>
                    {t("how-we-do-it.text1.part.3")}
                    <span>{t("how-we-do-it.text1.part.4")}</span>
                </label>

                <label>
                    {t("how-we-do-it.text2.part.1")}
                    <span>{t("how-we-do-it.text2.part.2")}</span>{t("how-we-do-it.text2.part.3")}<span>{t("how-we-do-it.text2.part.4")}</span>
                </label>
                <label>
                    {t("how-we-do-it.text3.part.1")}
                </label>
                <label>
                    <span>{t("how-we-do-it.text4.part.1")}</span>
                </label>
            </div>
        </div>
    )
}
