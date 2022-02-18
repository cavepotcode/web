import { useTranslation } from 'react-i18next';
import './WhereNameComeFrom.scss'

export function WhereNameComeFrom() {
    const [t] = useTranslation("global");

    return (
        <div className="where-name-come-from">
            {/* VER COMO COMODAR LAS PELOTITAS */}
            <div className="sphere-wrapper">
                <div className="sphere-1"></div>
                <div className="sphere-2"></div>
            </div>
            <div className="text-wrapper">
                <label className="title">{t("name-come-from.title.1")}</label>
                <label className="textpart">{t("name-come-from.text.part.1")}</label><br />
                <label className="title">{t("name-come-from.title.2")}</label>
                <label className="textpart">{t("name-come-from.text.part.2")}</label>

            </div>
        </div>
    );

}