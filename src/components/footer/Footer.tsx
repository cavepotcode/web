import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { NavLink } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'


import './Footer.scss';
import { useHref } from 'react-router-dom';

library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faLinkedin);


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
                    <div className='social-media'>
                        <a href="https://www.facebook.com/Cavepot" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                        <a href="https://twitter.com/Cavepot" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a href="https://www.instagram.com/cavepotuy" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        <a href="https://www.linkedin.com/company/3561578" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


















