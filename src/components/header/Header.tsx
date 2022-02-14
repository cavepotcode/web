import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { NavLink, useLocation } from 'react-router-dom';
import { Link, scroll } from 'react-scroll';

import './Header.scss';

interface Size {
    width: number;
    height: number;
  }

export const Header = () => {
    // The size of the window

    const [size, setSize] = useState<Size>({width: window.innerWidth,height: window.innerHeight});

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
    // This function updates the state thus re-render components
    const resizeHanlder = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setSize({
            width: width,
            height: height,
            });
    };

    useEffect(() => {
        const navItems = document.querySelectorAll('.menu-nav__item');
        if (showMenu) {
            navItems.forEach(item => item.classList.add('open'))
        }
        else {
            navItems.forEach(item => item.classList.remove('open'))
        }

    }, [showMenu])
    // Listening for the window resize event
    useEffect(() => {
        window.onresize = resizeHanlder;

        // You can also use:
        //window.addEventListener('resize', resizeHanlder);
    }, []);

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
                        {HeaderView() === '/' && size.width <= 1024   && 
                            <Link 
                                className="menu-nav__link"
                                activeClass="active"
                                to="technologies-changes"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={onShowMenu}
                            >
                                {t("header.home")}
                            </Link>
                        } 
                        {HeaderView() === '/' && size.width > 1024   && 
                            <Link 
                                className="menu-nav__link"
                                activeClass="active"
                                to="technologies-changes"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {t("header.home")}
                            </Link>
                        } 
                        {HeaderView() != '/' && size.width <= 1024 && 
                            <NavLink to="/" className="menu-nav__link" onClick={onShowMenu}>
                                {t("header.home")}
                            </NavLink>
                        } 
                        {HeaderView() != '/' && size.width > 1024 && 
                            <NavLink to="/" className="menu-nav__link">
                                {t("header.home")}
                            </NavLink>
                        } 
                    </li>
                    <li className="menu-nav__item">
                        {HeaderView() === '/' && size.width <= 1024  && 
                            <Link 
                                className="menu-nav__link"
                                activeClass="active"
                                to="how-we-do-it"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={onShowMenu}
                            >
                                {t("header.how.we.do.it")}
                            </Link>
                        } 
                        {HeaderView() === '/' && size.width > 1024  && 
                            <Link 
                                className="menu-nav__link"
                                activeClass="active"
                                to="how-we-do-it"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {t("header.how.we.do.it")}
                            </Link>
                        } 
                        {HeaderView() != '/' && size.width <= 1024 && 
                            <NavLink to="/" className="menu-nav__link" onClick={onShowMenu}>
                                {t("header.how.we.do.it")}
                            </NavLink>
                        } 
                        {HeaderView() != '/'  && size.width > 1024 && 
                            <NavLink to="/" className="menu-nav__link">
                                {t("header.how.we.do.it")}
                            </NavLink>
                        } 
                    </li>
                    <li className="menu-nav__item">
                        {size.width <= 1024 && 
                            <NavLink to="/projects" className="menu-nav__link" onClick={onShowMenu}>
                                    {  t("header.projects")}
                            </NavLink> }
                        {size.width > 1024 && 
                            <NavLink to="/projects" className="menu-nav__link">
                                    {  t("header.projects")}
                            </NavLink> }
                    </li>
                    <li className="menu-nav__item">
                        {size.width <= 1024 && 
                            <NavLink to="/aboutus" className="menu-nav__link" onClick={onShowMenu}>
                                    {  t("header.about.us")}
                            </NavLink> }
                        {size.width > 1024 && 
                            <NavLink to="/aboutus" className="menu-nav__link">
                                    {  t("header.about.us")}
                            </NavLink> }
                    </li>
                    <li className="menu-nav__item">
                        {size.width <= 1024 && 
                            <NavLink to="/contact" className="menu-nav__link" onClick={onShowMenu}>
                                    {  t("header.contact.us")}
                            </NavLink> }
                        {size.width > 1024 && 
                            <NavLink to="/contact" className="menu-nav__link">
                                    {  t("header.contact.us")}
                            </NavLink> }
                    </li>
                    <li className="menu-nav__item">
                        {size.width <= 1024 && 
                            <NavLink to="/blog" className="menu-nav__link" onClick={onShowMenu}>
                                    {  t("header.blog")}
                            </NavLink> }
                        {size.width > 1024 && 
                            <NavLink to="/blog" className="menu-nav__link">
                                    {  t("header.blog")}
                            </NavLink> }
                    </li>
                    <li className="menu-nav__item">
                        {size.width <= 1024 && 
                            <NavLink to="/lab" className="menu-nav__link" onClick={onShowMenu}>
                                    {  t("header.our.lab")}
                            </NavLink> }
                        {size.width > 1024 && 
                            <NavLink to="/lab" className="menu-nav__link">
                                    {  t("header.our.lab")}
                            </NavLink> }
                       
                    </li>
                </ul>
            </nav>
        </div>
    )
}
