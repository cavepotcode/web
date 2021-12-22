import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { FrmContact } from './frmContact/FrmContact';
import React, { useState } from "react";

import './Contact.scss';

export const Contact = () => {
    const options = {
        landing: false,
        newApp: false,
        reDesign: false,
        generalInfo: false,
        staff: false
    }
    const [activeClasses, setActiveClasses] = useState(options);


    const [t] = useTranslation("global");

    const toggleClass = (option: any) => {
        let optionToChange = option
        setActiveClasses(activeClasses[indice] = !activeClasses[indice]);
    };
    return (
        <div className="contact">
            <div className="title">
                <label>{t("contact.title")}</label>
                <label>{t("contact.sub-title")}</label>
            </div>
            <div className="contact-options-wrapper">
                <div className={activeClasses.landing ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("landing")}>
                    <div className='contact-option-img'>
                        <img src={AllImages.ANewLanding} alt="a-new-landing-icon" />
                    </div>
                    <div className='contact-option-title'>
                        <label>{t("contact.option1.title")}</label>
                    </div>
                </div>

                {/* <div className={activeClasses[1] ? 'contact-option-card selected' : 'contact-option-card'} onClick={toggleClass}>
                    <div className='contact-option-img'>

                        <img src={AllImages.ANewApp} alt="a-new-appicon" />
                    </div>
                    <div className='contact-option-title'>
                        <label>{t("contact.option2.title")}</label>
                    </div>
                </div>

                <div className={activeClasses[2] ? 'contact-option-card selected' : 'contact-option-card'} onClick={toggleClass}>
                    <div className='contact-option-img'>
                <img src={AllImages.Redesign} alt="redesign" />
                    </div>
                    <div className='contact-option-title'>
                        <label>{t("contact.option3.title")}</label>
                    </div>
                </div>

                <div className={activeClasses[3] ? 'contact-option-card selected' : 'contact-option-card'} onClick={toggleClass}>
                    <div className='contact-option-img'>
                <img src={AllImages.GeneralInfo} alt="general-info" />
                    </div>
                    <div className='contact-option-title'>
                        <label>{t("contact.option4.title")}</label>
                    </div>
                </div>

                <div className={activeClasses[4] ? 'contact-option-card selected' : 'contact-option-card'} onClick={toggleClass}>
                    <div className='contact-option-img'>
                <img src={AllImages.StaffAugmentation} alt="staff-augmentation" />
                    </div>
                    <div className='contact-option-title'>
                        <label>{t("contact.option5.title")}</label>
                    </div>
                </div> */}
                <div className='contact-form'>
                    {/* <FrmContact /> */}
                </div>
            </div>
        </div>
    )
}
