import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import './WhatIsCavepot.scss'

export default function WhatIsCavepot() {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="what-is-cavepot">
            <div className="title-wrapper">
                <label className="title">{t("what-is-cavepot.title")}</label>
            </div>
            <img id="blue-line" src={AllImages.Shortblueline} alt="BlueLine" />
            <label>{t("what-is-cavepot.text1.part.1")}
                <span>{t("what-is-cavepot.text1.part.2")}</span>
                {t("what-is-cavepot.text1.part.3")}
                <span>{t("what-is-cavepot.text1.part.4")}</span>
                {t("what-is-cavepot.text1.part.5")}
            </label>
            <label>{t("what-is-cavepot.text2.part.1")}
                <span>{t("what-is-cavepot.text2.part.2")}</span>
                {t("what-is-cavepot.text2.part.3")}
                <span>{t("what-is-cavepot.text2.part.4")}</span>
            </label>
            <label>{t("what-is-cavepot.text3.part.1")}
                <span>{t("what-is-cavepot.text3.part.2")}</span>
            </label>
            <img id="short-blue-line" src={AllImages.Shortblueline} alt="shortBlueLine" />
            <div className="message">{t("what-is-cavepot.message")}</div>
        </div>
    )
}
