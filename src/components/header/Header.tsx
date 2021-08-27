import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import './Header.scss';

export const Header = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div id="header" className="header">
            <div className="img-wrapper">
                <img src={AllImages.LogoHeader} alt="" />
            </div>
            <div className="header-options">
                <a href="#header">{t("header.home")}</a>
                <a href="#how-we-do-it">{t("header.how.we.do.it")}</a>
                <a href="#header">{t("header.projects")}</a>
                <a href="#header">{t("header.about.us")}</a>
                <a href="#header">{t("header.contact.us")}</a>
                <a href="#header">{t("header.blog")}</a>
                <a href="#header">{t("header.our.lab")}</a>
                <label></label>
            </div>
        </div>
    )
}
