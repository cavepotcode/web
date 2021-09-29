import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import './Footer.scss';

export const Footer = () => {
    const [t] = useTranslation("global");

    return (
        <div className="footer">
            <div className="img-wrapper">
                <img src={AllImages.LogoFooter} alt="cavepot-footer-logo" />
                <img src={AllImages.CavepotLabLogo} alt="cavepot-lab-logo" />
                
            </div>
            <div className="text-wrapper">
                <div className="column">
                    <label className='title'>{t("footer.column.1.title")}</label>
                    <label>{t("footer.column.1.text.1")}</label>
                    <label>{t("footer.column.1.text.2")}</label>
                    <label>{t("footer.column.1.text.3")}</label>
                    <label>{t("footer.column.1.text.4")}</label>
                    <label>{t("footer.column.1.text.5")}</label>
                </div>
                <div className="column">
                    <label className='title'>{t("footer.column.2.title")}</label>
                    <label>{t("footer.column.2.text.1")}</label>
                    <label>{t("footer.column.2.text.2")}</label>
                    <label>{t("footer.column.2.text.3")}</label>
                    <label>{t("footer.column.2.text.4")}</label>
                    <label>{t("footer.column.2.text.5")}</label>
                    <label>{t("footer.column.2.text.6")}</label>
                </div>
                <div className="column">
                    <label className='title'>{t("footer.column.3.title")}</label>
                    <label>{t("footer.column.3.text.1")}</label>
                    <label>{t("footer.column.3.text.2")}</label>
                    <label>{t("footer.column.3.text.3")}</label>
                    <label>{t("footer.column.3.text.4")}</label>
                    <label>{t("footer.column.3.text.5")}</label>
                </div>
                <div className="column">
                    <label className='title' >{t("footer.column.4.title")}</label>
                    <label>{t("footer.column.4.text.1")}</label>
                    <label>{t("footer.column.4.text.2")}</label>
                    <label>{t("footer.column.4.text.3")}</label>
                    <img src={AllImages.Redes} alt="social-media" />
                </div>
            </div>
        </div>
    )
}

















