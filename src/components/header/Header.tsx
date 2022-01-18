import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
    const [t] = useTranslation("global");
    const [showMenu, setShowMenu] = useState(false);
    const onShowMenu = () => setShowMenu((prev) => !prev);

    useEffect(() => {
        const navItems = document.querySelectorAll('.menu-nav__item');
        if (showMenu) {
            navItems.forEach(item => item.classList.add('open'))
        }
        else {
            navItems.forEach(item => item.classList.remove('open'))
        }

    }, [showMenu])

    return (
        <div id="header" className={showMenu ? 'header open' : 'header'}>
            <div className="img-wrapper">
                <img src={AllImages.LogoHeader} alt="" />
            </div>
            <div className="menu-btn" onClick={onShowMenu}>
                <span className={showMenu ? 'menu-btn__burger open' : 'menu-btn__burger'}></span>
            </div>
            <nav className={showMenu ? 'nav open' : 'nav'}>
                <ul className={showMenu ? 'menu-nav open' : 'menu-nav'}>
                    <li className="menu-nav__item active">
                        <NavLink to="/" className="menu-nav__link">
                            {t("header.home")}
                        </NavLink>
                    </li>
                    <li className="menu-nav__item">
                        <a href="about.html" className="menu-nav__link">
                            {t("header.how.we.do.it")}
                        </a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="projects.html" className="menu-nav__link">
                            {t("header.projects")}
                        </a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="contact.html" className="menu-nav__link">
                            {t("header.about.us")}
                        </a>
                    </li>
                    <li className="menu-nav__item">
                        <NavLink to="/contact" className="menu-nav__link">
                            {t("header.contact.us")}
                        </NavLink>
                    </li>
                    <li className="menu-nav__item">
                        <a href="contact.html" className="menu-nav__link">
                            {t("header.blog")}
                        </a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="contact.html" className="menu-nav__link">
                            {t("header.our.lab")}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
