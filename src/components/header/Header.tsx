import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.scss';

export interface Size {
    width: number;
    height: number;
  }

export const Header = () => {
    // The size of the window
    const [size, setSize] = useState<Size>({width: window.innerWidth,height: window.innerHeight});

    

    const [t] = useTranslation("global");

    const links = Object.values(t('links.header', { returnObjects: true }));
    const [showMenu, setShowMenu] = useState(false);
    const onShowMenu = () => setShowMenu((prev) => !prev);

    function HeaderView() {
        const location = useLocation();
        console.log(location.pathname);
        return location.pathname
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

        window.onresize = resizeHanlder;

    }, [showMenu])

    return (
        <div id="header" className={showMenu ? 'header open' : 'header'}>
            <NavLink className="img-wrapper" to='/'>
                <img src={AllImages.LogoCPNegro} alt="" />
            </NavLink>
            <div className="menu-btn" onClick={onShowMenu}>
                <span className={showMenu ? 'menu-btn__burger open' : 'menu-btn__burger'}></span>
            </div>
            <nav className={showMenu ? 'nav open' : 'nav'}>
                <ul className={showMenu ? 'menu-nav open' : 'menu-nav'}>
                    {
                        links.map((obj: any,key) => (
                            //className="menu-nav__link-contact"
                            <li className="menu-nav__item">
                                {obj.link.includes("http") && 
                                    <a href={obj.link} target='_blank' className='menu-nav__link'>
                                        { obj.label }
                                    </a>
                                }
                                {!obj.link.includes("http") && size.width <= 1024 && 
                                    <NavLink to={obj.link} className={obj.link.includes("contact") ? "menu-nav__link-contact" : "menu-nav__link"} onClick={onShowMenu}>
                                            { obj.label }
                                    </NavLink> 
                                }
                                {!obj.link.includes("http") &&  size.width > 1024 && 
                                    <NavLink to={obj.link} className={obj.link.includes("contact") ? "menu-nav__link-contact" : "menu-nav__link"} >
                                            { obj.label }
                                    </NavLink> 
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
