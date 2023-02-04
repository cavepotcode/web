import { lazy } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AllImages } from '../../../helpers';
import './TechnologiesChanges.scss';

export const TechnologiesChanges = () => {
    const [t] = useTranslation("global");

    return (
        <div className="technologies-changes">
            <div className='max-container'>
                <div className="textwrapper animation-showup">
                    <label className="subtitle"><Trans>{t("technologies-changes.claim")}</Trans></label>
                    <label className="title">{t("technologies-changes.title")}</label>
                    <label className="subtitle"><Trans>{t("technologies-changes.subtitle")}</Trans></label>
                    <div className='button-container'>
                        <NavLink to="/contact">
                            <a className='button'>{t("header.contact.us")}</a>
                        </NavLink>
                    </div>

                </div>
                <div className="img-technologies">
                    <img className="animation-showleft" src={AllImages.Banner} alt={t("technologies-changes.alt.img.1")} loading="lazy" />
                </div>
            </div>
        </div>

    )
}
