import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import { HeaderItem } from './HeaderItem';

export interface Size {
    width: number;
    height: number;
}

export const Header = () => {
    // The size of the window
    const [size, setSize] = useState<Size>({ width: window.innerWidth, height: window.innerHeight });


    const [t] = useTranslation("global");

    const links = Object.values(t('links.header', { returnObjects: true }));
    const [showMenu, setShowMenu] = useState(false);
    const [colapse, setColapse] = useState(false);
    const onShowMenu = () => setShowMenu((prev) => !prev);
    const onColapse = (value) => setColapse(value);

    // This function updates the state thus re-render components
    const resizeHanlder = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setSize({
            width: width,
            height: height,
        });
    };


    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (window.pageYOffset > 60) {
            onColapse(true);
        } else {
            onColapse(false);
        }

    };

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
    }, [colapse]);

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
        <div id="header" className={`header ${colapse ? "colapse" : ""} ${showMenu ? 'open' : ''}`}>
            <div className='max-container'>
                <NavLink className={`img-wrapper`} to='/'>
                    <div id="c"></div>
                    <div id="a"></div>
                    <div id="v"></div>
                    <div id="e"></div>
                    <div id="p"></div>
                    <div id="o"></div>
                    <div id="t"></div>
                </NavLink>
                <div className="menu-btn" onClick={onShowMenu}>
                    <span className={showMenu ? 'menu-btn__burger open' : 'menu-btn__burger'}></span>
                </div>
                <nav className={showMenu ? 'nav open' : 'nav'}>
                    <ul className={showMenu ? 'menu-nav open' : 'menu-nav'}>
                        {
                            links.map((obj:any, key) => {
                                return (
                                    obj.enable && <HeaderItem item={obj} key={key} onShowMenu={onShowMenu} size={size}/>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

        </div>
    )
}
