import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { NavLink } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


import './Footer.scss';
import { useHref } from 'react-router-dom';

library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faGithub);


export const Footer = () => {
    const [t] = useTranslation("global");

    const linksHeader = Object.values(t('links.header', { returnObjects: true }));
    const linksProjects = Object.values(t('projects.projects', { returnObjects: true }));
    const linksRedes = Object.values(t('links.redes', { returnObjects: true }))
    return (
        <div className="footer">
            <div className='max-container'>
                <div className="img-wrapper">

                    <NavLink to="/"><img src={AllImages.LogoFooter} alt={t("footer.alt.img.1")} /></NavLink>
                    {/* <a href="https://www.cavepotlab.com/" target="_blank"><img src={AllImages.CavepotLabLogo} alt={t("footer.alt.img.2")} /></a> */}

                </div>
                <div className="text-wrapper">
                    <div className="column company">
                        <label className='title'>{t("footer.column.1.title")}</label>
                        {linksHeader.map((obj: any, key) => {
                            return obj.enable && <div key={`pages_${key}`}>
                                {obj.link.includes("http") &&
                                    <a href={obj.link} target='_blank' className='menu-nav__link'>
                                        {obj.label}
                                    </a>
                                }
                                {!obj.link.includes("http") &&
                                    <NavLink to={obj.link}>
                                        {obj.label}
                                    </NavLink>
                                }
                            </div>
                        })}
                    </div>
                    {/* <div className="column experiences">
                        <label className='title'>{t("footer.column.2.title")}</label>
                        {Object.keys(linksProjects).slice(0, 4).map((it: string, key) => {
                            return <NavLink to={"/project/" + linksProjects[it].img} target="_blank" key={`project_${key}`}>
                                {linksProjects[it].title}
                            </NavLink>
                        })}
                        <NavLink to={t("links.experiences.link")}>
                            {t("links.experiences.label")}
                        </NavLink>
                    </div> */}
                    <div className="column locate">
                        <div className='main-text'>
                            <label className='title' >{t("footer.column.4.title")}</label>
                            <a href='https://goo.gl/maps/wz4pabw7Pg1Q5bog8' target="_blank">{t("footer.column.4.text.1")} {t("footer.column.4.text.2")}</a>

                            <a href='mailto:info@cavepot.com' target="_blank">{t("footer.column.4.text.3")}</a>
                        </div>
                        <div className='social-media'>
                            {linksRedes.map((obj: any, key) => (
                                <a href={obj.link} target="_blank" key={`socialIcon_${key}`}>
                                    <FontAwesomeIcon icon={['fab', obj.label.toLowerCase()]} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <p className='date-footer'>© {(new Date()).getFullYear()} Cavepot. All rights reserved</p>
        </div>
    )
}


















