import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import './ClientSay.scss';

export const ClientSay = () => {
    const [t] = useTranslation("global");

    return (
        <div className="client-say">
            <div className="label-wrapper">
                <label>{t("clients-says.title")}</label>
            </div>
            <div className="right-container">
                <img src={AllImages.LeftArrow} alt="left-arrow" />
                <div className="card">
                    <label className="text-say">"{t("clients-says.text")}"
                    </label>
                    <div className="firm">
                        <label>{t("clients-says.firm")}</label>
                    </div>
                </div>
                <img src={AllImages.RightArrow} alt="right-arrow" />
            </div>
        </div>
    )
}
