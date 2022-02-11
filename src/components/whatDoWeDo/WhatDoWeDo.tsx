import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import './WhatDoWeDo.scss';

export const WhatDoWeDo = () => {
    const [t] = useTranslation("global");

    return (
        <div className="what-do-we-do">
            <div className="title">
                <label>{t("what-do-we-do.title")}</label>
                <label>{t("what-do-we-do.sub-title")}</label>
            </div>
            <div className="cards-wrapper">
                <div>
                    <label>{t("what-do-we-do.card1.title")}</label>
                        <NavLink to="/contact/aNewApp">
                            <button>
                                {t("what-do-we-do.card1.button")}
                            </button>   
                        </NavLink>
                </div>
                <div>
                <label>{t("what-do-we-do.card2.title")}</label>
                        <NavLink to="/contact/aNewLanding">
                            <button>
                                {t("what-do-we-do.card2.button")}
                            </button>   
                        </NavLink>
                </div>
                <div>
                <label>{t("what-do-we-do.card3.title")}</label>
                        <NavLink to="/contact/redesign">
                            <button>
                                {t("what-do-we-do.card3.button")}
                            </button>  
                        </NavLink>
                </div>
                <div>
                <label>{t("what-do-we-do.card4.title")}</label>
                        <NavLink to="/contact/staffAugmentation">
                            <button>
                                {t("what-do-we-do.card4.button")}
                            </button>  
                        </NavLink>
                </div>
            </div>
        </div>
    )
}
