import { useTranslation, Trans } from 'react-i18next';
import { AllImages } from '../../helpers';
import './TechnologiesThatWeUse.scss';

export const TechnologiesThatWeUse = () => {
    const [t] = useTranslation("global");

    return (
        <div className="technologies-that-we-use">
            <label className="title">{t("technologies-that-we-use.title")}</label>
            <div className="img-wrapper">
                <img src={AllImages.PhytonLogoLinea} alt="phyton-logo" />
                <img src={AllImages.AngularLogoLinea} alt="angular-logo" />
                <img src={AllImages.MicrosoftNetLogoLinea} alt="microsoft-net-logo" />
                <img src={AllImages.ReactLogoLinea} alt="react-logo" />
                <img src={AllImages.NodeLogoLinea} alt="node-logo" />
                <img src={AllImages.NetCoreLogoLinea} alt="net-core-logo" />
            </div>
            <div className="blue-line-wrapper">
                <label><Trans>{t("technologies-that-we-use.text")}</Trans></label>
                <div id="blue-line"></div>
            </div>
        </div>
    )
}
