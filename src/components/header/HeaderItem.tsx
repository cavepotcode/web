import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export interface Size {
    width: number;
    height: number;
}

export const HeaderItem = ({ item, key, size, onShowMenu }) => {



    return (


        <li className="menu-nav__item" key={`headerLinks__${key}`}>
            {item.link.includes("http") &&
                <a href={item.link} target='_blank' className='menu-nav__link'>
                    {item.label}
                </a>
            }
            {!item.link.includes("http") && size.width <= 1024 &&
                <NavLink to={item.link} className={item.link.includes("contact") ? "menu-nav__link-contact" : "menu-nav__link"} onClick={onShowMenu}>
                    {item.label}
                </NavLink>
            }
            {!item.link.includes("http") && size.width > 1024 &&
                <NavLink to={item.link} className={item.link.includes("contact") ? "menu-nav__link-contact" : "menu-nav__link"} >
                    {item.label}
                </NavLink>
            }
        </li>

    )
}
