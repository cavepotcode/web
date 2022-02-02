import { useTranslation, Trans } from 'react-i18next';
import { AllImages } from '../../../helpers';
import './WhyDoWeExist.scss';

export const WhyDoWeExist = () => {
    const [t] = useTranslation("global");

    return (
        <div className="why-do-we-exist">
            <div className="textwrapper">
                <label className="title">{t("why-do-we-exist.title")}</label>
                <label className="textpart">{t("why-do-we-exist.text.part.1")}</label>
                <label className="textpart">{t("why-do-we-exist.text.part.2")}</label>
                <label className="textpart">{t("why-do-we-exist.text.part.3")}</label>
            </div>
            <div className="img-wrapper">
                <img src={AllImages.AboutUsBanner} alt="AboutUsBanner" />
            </div>
        </div>
    )
}
