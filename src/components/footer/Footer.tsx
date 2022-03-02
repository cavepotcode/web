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
                <img src={AllImages.LogoFooter} alt={t("footer.alt.img.1")} />
                <img src={AllImages.CavepotLabLogo} alt={t("footer.alt.img.2")} />
                
            </div>
            <div className="text-wrapper">
                <div className="column company">
                    <label className='title'>{t("footer.column.1.title")}</label>
                    {/* VER COMO HACER PARA QUE TE LLEVE A LA SECCION Y TE HAGA EL EFECTO SCROLL */}
                    <NavLink to="/">{t("footer.column.1.text.1")} </NavLink>
                    <NavLink to="/">{t("footer.column.1.text.2")}</NavLink>
                    <NavLink to="/"> {t("footer.column.1.text.3")}</NavLink>
                    <NavLink to="/">{t("footer.column.1.text.4")}</NavLink>
                    <NavLink to="/">{t("footer.column.1.text.5")}</NavLink>
                </div>
                <div className="column experiences">
                    <label className='title'>{t("footer.column.2.title")}</label>
                    <label>{t("footer.column.2.text.1")}</label>
                    <label>{t("footer.column.2.text.2")}</label>
                    <label>{t("footer.column.2.text.3")}</label>
                    <label>{t("footer.column.2.text.4")}</label>
                    <label>{t("footer.column.2.text.5")}</label>
                    <label>{t("footer.column.2.text.6")}</label>
                </div>
                <div className="column connect">
                    <label className='title'>{t("footer.column.3.title")}</label>
                    <a href="https://www.instagram.com/cavepotuy" target="_blank">{t("footer.column.3.text.1")}</a>
                    <a href="https://www.facebook.com/Cavepot" target="_blank">{t("footer.column.3.text.2")}</a>
                    <a href="https://twitter.com/Cavepot" target="_blank">{t("footer.column.3.text.3")}</a>
                    <a href="https://www.linkedin.com/company/3561578" target="_blank">{t("footer.column.3.text.4")}</a>
                    <a href="https://github.com/cavepotcode/" target="_blank">{t("footer.column.3.text.5")}</a>
                </div>
                <div className="column locate">
                    <div className='main-text'>
                        <label className='title' >{t("footer.column.4.title")}</label>
                        <label>{t("footer.column.4.text.1")} {t("footer.column.4.text.2")}</label>
                
                        <label>{t("footer.column.4.text.3")}</label>
                    </div>
                    <div className='social-media'>
                        <a href="https://www.facebook.com/Cavepot" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                        <a href="https://twitter.com/Cavepot" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a href="https://www.instagram.com/cavepotuy" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        <a href="https://www.linkedin.com/company/3561578" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>

                    </div>
                    <div className="clutch-wrapper">
                        <div className="clutch-widget" data-nofollow="true" data-url="https://widget.clutch.co" data-widget-type="1" data-darkbg="true" data-height="40" data-clutchcompany-id="592393"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}


















