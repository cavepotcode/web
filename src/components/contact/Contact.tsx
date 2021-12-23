import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { FrmContact } from './frmContact/FrmContact';
import React, { useState } from "react";

import './Contact.scss';

export const Contact = () => {
    const options: any = {
        aNewLanding: true,
        aNewApp: false,
        redesign: false,
        generalInfo: false,
        staffAugmentation: false
    }
    const [activeClasses, setActiveClasses] = useState<any>(options);

    const [t] = useTranslation("global");

    const toggleClass = (option: any) => {

        setActiveClasses({
            options,
            [option]: true
        });
    };
    return (
        <div className="contact">
            <div className="title">
                <label>{t("contact.title")}</label>
                <label>{t("contact.sub-title")}</label>
            </div>
            <div className='form-wrapper'>
                <div className="contact-options-wrapper">
                    <div className={activeClasses.aNewLanding ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("aNewLanding")}>
                        <div className='contact-option-img'>
                            <img src={AllImages.ANewLanding} alt="a-new-landing-icon" />
                        </div>
                        <div className='contact-option-title'>
                            <label>{t("contact.option1.title")}</label>
                        </div>
                    </div>

                    <div className={activeClasses.aNewApp ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("aNewApp")}>
                        <div className='contact-option-img'>

                            <img src={AllImages.ANewApp} alt="a-new-appicon" />
                        </div>
                        <div className='contact-option-title'>
                            <label>{t("contact.option2.title")}</label>
                        </div>
                    </div>

                    <div className={activeClasses.redesign ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("redesign")}>
                        <div className='contact-option-img'>
                            <img src={AllImages.Redesign} alt="redesign" />
                        </div>
                        <div className='contact-option-title'>
                            <label>{t("contact.option3.title")}</label>
                        </div>
                    </div>

                    <div className={activeClasses.generalInfo ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("generalInfo")}>
                        <div className='contact-option-img'>
                            <img src={AllImages.GeneralInfo} alt="general-info" />
                        </div>
                        <div className='contact-option-title'>
                            <label>{t("contact.option4.title")}</label>
                        </div>
                    </div>

                    <div className={activeClasses.staffAugmentation ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("staffAugmentation")}>
                        <div className='contact-option-img'>
                            <img src={AllImages.StaffAugmentation} alt="staff-augmentation" />
                        </div>
                        <div className='contact-option-title'>
                            <label>{t("contact.option5.title")}</label>
                        </div>
                    </div>
                </div>

                <div className='contact-form'>
                    {/* <FrmContact /> */}
                </div>
            </div>

        </div>
    )
}
