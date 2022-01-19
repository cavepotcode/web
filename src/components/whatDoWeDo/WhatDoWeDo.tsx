import { useTranslation } from 'react-i18next';
import './WhatDoWeDo.scss';

export const WhatDoWeDo = () => {
    const [t] = useTranslation("global");

    return (
        <div className="what-do-we-do">
            <div className="title">
                <label>{t("what-do-we-do.title")}</label>
                <label>{t("what-do-we-do.sub-title")}</label>
            </div>
            <div className="cards-wrapper">
                <div className="first-element">
                    <label>{t("what-do-we-do.card1.title")}</label>
                    <button>{t("what-do-we-do.card1.button")}</button>
                </div>
                <div>
                <label>{t("what-do-we-do.card2.title")}</label>
                    <button>{t("what-do-we-do.card2.button")}</button>
                </div>
                <div>
                <label>{t("what-do-we-do.card3.title")}</label>
                    <button>{t("what-do-we-do.card3.button")}</button>
                </div>
                <div>
                <label>{t("what-do-we-do.card4.title")}</label>
                    <button>{t("what-do-we-do.card4.button")}</button>
                </div>
            </div>
        </div>
    )
}
