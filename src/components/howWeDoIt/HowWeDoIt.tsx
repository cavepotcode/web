import { useTranslation } from 'react-i18next';
import './HowWeDoIt.scss';
export const HowWeDoIt = () => {
    const [t] = useTranslation("global");

    return (
        <div id="how-we-do-it" className="how-we-do-it">
            <label className="title">{t("how-we-do-it.title")}</label>
            <div className="text-wrapper">
                <label className='papa'>
                    {t("how-we-do-it.text1.part.1")}
                    <b>{t("how-we-do-it.text1.part.2")}</b>
                    {t("how-we-do-it.text1.part.3")}
                    <b>{t("how-we-do-it.text1.part.4")}</b>
                </label>
                <label  className='papa'>
                    {t("how-we-do-it.text2.part.1")}
                    <b>{t("how-we-do-it.text2.part.2")}</b>{t("how-we-do-it.text2.part.3")}<b>{t("how-we-do-it.text2.part.4")}</b>
                </label>
                <label  className='papa'>
                    {t("how-we-do-it.text3.part.1")}
                </label>
                <label  className='papa'>
                    <b>{t("how-we-do-it.text4.part.1")}</b>
                </label>
            </div>
        </div>
    )
}
