import { useTranslation } from 'react-i18next';
import './WhatIsCavepot.scss'

export default function WhatIsCavepot() {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="what-is-cavepot">
            <div className="title-wrapper">
                <label className="title">{t("what-is-cavepot.title")}</label>
            </div>
        </div>
    )
}
