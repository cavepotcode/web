import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { NavLink, useLocation } from 'react-router-dom';
import { Link, scroll } from 'react-scroll';

import './Header.scss';

export const Header = () => {
    const [t] = useTranslation("global");
    const [showMenu, setShowMenu] = useState(false);
    const onShowMenu = () => setShowMenu((prev) => !prev);

    function HeaderView() {
        const location = useLocation();
        console.log(location.pathname);
        return location.pathname
      }
    function ToTop() {
        scroll.scrollToTop();
    }

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
                <img src={AllImages.LogoCPNegro} alt="" />
            </div>
            <div className="menu-btn" onClick={onShowMenu}>
                <span className={showMenu ? 'menu-btn__burger open' : 'menu-btn__burger'}></span>
            </div>
            <nav className={showMenu ? 'nav open' : 'nav'}>
                <ul className={showMenu ? 'menu-nav open' : 'menu-nav'}>
                    <li className="menu-nav__item">
                    {HeaderView() === '/' && <Link 
                                className="menu-nav__link"
                                activeClass="active"
                                to="technologies-changes"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {t("header.home")}
                            </Link>} 
                        {HeaderView() != '/' && 
                            <NavLink to="/" className="menu-nav__link">
                                {t("header.home")}
                            </NavLink>
                        } 
                    </li>
                    <li className="menu-nav__item">
                        {HeaderView() === '/' && <Link 
                                className="menu-nav__link"
                                activeClass="active"
                                to="how-we-do-it"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {t("header.how.we.do.it")}
                            </Link>} 
                        {HeaderView() != '/' && 
                            <NavLink to="/" className="menu-nav__link">
                                {t("header.how.we.do.it")}
                            </NavLink>
                        } 
                        
                        {/* <Link to="/#how-we-do-it" className="menu-nav__link">
                            {t("header.how.we.do.it")}
                        </Link> */}
                        {/* <a href="/#how-we-do-it" className="menu-nav__link">
                            {t("header.how.we.do.it")}
                        </a> */}
                    </li>
                    <li className="menu-nav__item">
                        <NavLink to="/projects" className="menu-nav__link">
                            {t("header.projects")}
                        </NavLink>
                    </li>
                    <li className="menu-nav__item">
                        <NavLink to="/aboutus" className="menu-nav__link">
                            {t("header.about.us")}
                        </NavLink>
                    </li>
                    <li className="menu-nav__item">
                        <NavLink to="/contact" className="menu-nav__link">
                            {t("header.contact.us")}
                        </NavLink>
                    </li>
                    <li className="menu-nav__item">
                        <NavLink to="/blog" className="menu-nav__link">
                            {t("header.blog")}
                        </NavLink>
                    </li>
                    <li className="menu-nav__item">
                        <NavLink to="/lab" className="menu-nav__link">
                            {t("header.our.lab")}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
