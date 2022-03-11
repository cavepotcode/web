import { Trans, useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import './TechnologiesChanges.scss';

export const TechnologiesChanges = () => {
    const [t] = useTranslation("global");

    return (
        <div className="technologies-changes">
            <div className="textwrapper">
                <label className="title">{t("technologies-changes.title")}</label>
                <label className="subtitle"><Trans>{t("technologies-changes.subtitle")}</Trans></label>
            </div>
            <div className="img-technologies">
                <img src={AllImages.Banner} alt={t("technologies-changes.alt.img.1")} />
            </div>
        </div>
    )
}
