import { useTranslation } from 'react-i18next';
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
            </div>
            {/* <div id="short-blue-line"></div> */}
            <div className="message-container">
                <div className="message">{t("what-is-cavepot.message")}</div>
            </div>
        </div>
    )
}
