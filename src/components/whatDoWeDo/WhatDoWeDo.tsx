import { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AllImages } from '../../helpers';

import './WhatDoWeDo.scss';

var delay = 0;
export const WhatDoWeDo = () => {
    const [t] = useTranslation("global");
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation');
                entry.target.style.animationDelay = delay + 's'
                delay = delay + 0.2;
                return;
            }
        });
        delay = 0;
    });



    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(item => {
            observer.observe(item);
        });
    }, [])


    return (
        <div className="what-do-we-do">
            <div className="title">
                <label>{t("what-do-we-do.title")}</label>
                <label>{t("what-do-we-do.sub-title")}</label>
            </div>
            <div className="cards-wrapper">
                {/* <NavLink to="/contact/aNewApp">
                    <div className='card'>
                        <div className='img-wrapper'>
                            <img src={AllImages.ANewApp} />
                        </div>
                        <label><Trans>{t("what-do-we-do.card1.title")}</Trans></label>
                        <p><Trans>{t("what-do-we-do.card1.text")}</Trans></p>
                    </div>
                </NavLink> */}

                <div className='card'>
                    <div className='img-wrapper'>
                        <img src={AllImages.ANewLanding} />
                    </div>
                    <label><Trans>{t("what-do-we-do.card2.title")}</Trans></label>
                    <p><Trans>{t("what-do-we-do.card2.text")}</Trans></p>
                    <NavLink to="/contact/aNewLanding">
                        <button>
                            {t("what-do-we-do.card2.button")}
                        </button>
                    </NavLink>
                </div>

                <div className='card'>
                    <div className='img-wrapper'>
                        <img src={AllImages.Redesign} />
                    </div>
                    <label><Trans>{t("what-do-we-do.card3.title")}</Trans></label>
                    <p><Trans>{t("what-do-we-do.card3.text")}</Trans></p>
                    <NavLink to="/contact/redesign">
                        <button>
                            {t("what-do-we-do.card3.button")}
                        </button>
                    </NavLink>
                </div>


                <div className='card'>
                    <div className='img-wrapper'>
                        <img src={AllImages.StaffAugmentation} />
                    </div>
                    <label><Trans>{t("what-do-we-do.card4.title")}</Trans></label>
                    <p><Trans>{t("what-do-we-do.card4.text")}</Trans></p>
                    <NavLink to="/contact/staffAugmentation">
                        <button>
                            {t("what-do-we-do.card4.button")}
                        </button>
                    </NavLink>
                </div>

            </div>
        </div>
    );
}
