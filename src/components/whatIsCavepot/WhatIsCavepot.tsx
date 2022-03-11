import { useTranslation, Trans } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './WhatIsCavepot.scss'

export default function WhatIsCavepot() {
    const [t] = useTranslation("global");

    return (
        <div className="what-is-cavepot">
            <div className="title-wrapper">
                <label className="title">{t("what-is-cavepot.title")}</label>
            </div>
            {/* <div  id="blue-line"></div> */}
            <div className="wrapper">
                <label>
                    <Trans>{t("what-is-cavepot.text1")}</Trans>
                </label>
                <label>
                    <Trans>{t("what-is-cavepot.text2")}</Trans>
                </label>
                <label>
                    <Trans>{t("what-is-cavepot.text3")}</Trans>
                </label>
            </div>
            {/* <div id="short-blue-line"></div> */}
            <div className="message-container">
                <NavLink to="/contact">
                    <button>{t("what-is-cavepot.message")}</button>
                </NavLink>
            </div>
        </div>
    )
}
