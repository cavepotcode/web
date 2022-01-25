import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import './Investigation.scss';

export const Investigation = () => {
    const [t] = useTranslation("global");

    return (
        <div className="investigation">
            <img src={AllImages.Banner2} alt="" />
            <div className="text-wrapper">
                <div className="main-text-wrapper">
                    <label className="title">{t("investigation.title")}</label>
                    <label>{t("investigation.text.1")}</label>
                    <label>{t("investigation.text.2")}</label>
                </div>
            <button>{t("investigation.button")}</button>
            </div>
        </div>
    )
}
