import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import './TechnologiesThatWeUse.scss';

export const TechnologiesThatWeUse = () => {
    const [t] = useTranslation("global");

    return (
        <div className="technologies-that-we-use">
            <label className="title">{t("technologies-that-we-use.title")}</label>
            <div className="img-wrapper">
                <img src={AllImages.AngularLogo} alt="angular-logo" />
                <img src={AllImages.AngularLogo} alt="angular-logo" />
                <img src={AllImages.MicrosoftNetLogo} alt="microsoft-net-logo" />
                <img src={AllImages.ReactLogo} alt="react-logo" />
                <img src={AllImages.NodeLogo} alt="node-logo" />
                <img src={AllImages.NetCoreLogo} alt="net-core-logo" />
            </div>
            <div className="blue-line-wrapper">
                <label>{t("technologies-that-we-use.text.part.1")}<span>{t("technologies-that-we-use.text.part.2")}</span></label>
                <div id="blue-line"></div>
            </div>
        </div>
    )
}
