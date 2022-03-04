import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import { FrmNewLanding } from './frmContact/FrmNewLanding';
import { FrmNewApp } from './frmContact/FrmNewApp';
import { FrmReRe } from './frmContact/FrmReRe';
import { FrmGeneralInfo } from './frmContact/FrmGeneralInfo';
import { FrmStaffAugmentation } from './frmContact/FrmStaffAugmentation';
import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import './Contact.scss';
import { Size } from '../header/Header';

export const Contact = () => {
    // The size of the window
    const [size, setSize] = useState<Size>({width: window.innerWidth,height: window.innerHeight});

    let params = useParams();
    let param ;
    if(params.frm)
        param = params.frm;
    else
        param = 'generalInfo';

    
    var options: any = {
        aNewLanding: param === 'aNewLanding' ? true : false,
        aNewApp: param === 'aNewApp' ? true : false,
        redesign: param === 'redesign' ? true : false,
        generalInfo: param === 'generalInfo' ? true : false,
        staffAugmentation: param === 'staffAugmentation' ? true : false,
    }
    const [activeClasses, setActiveClasses] = useState<any>(options);

    const [t] = useTranslation("global");

    const toggleClass = (option: any) => {

        setActiveClasses({
            options,
            [option]: true
        });
    };

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
        window.onresize = resizeHanlder;
    }, [null])
    
    return (
        <div className="contact">
            <div className="title">
                <label>{t("contact.title")}</label>
                <label>{t("contact.sub-title")}</label>
            </div>
            <div className='form-wrapper'>
                <div className="contact-options-wrapper">
                    <div className={activeClasses.generalInfo ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("generalInfo")}>
                        <div className='contact-option-img'>
                            <img src={AllImages.GeneralInfo} alt={t("contact.option4.alt.img")} />
                        </div>
                        <div className='contact-option-title'>
                            <label>
                                {size.width <= 1024  ? t("contact.option4.titlesm") : t("contact.option4.title")  }
                      
                            </label>
                        </div>
                    </div>

                    <div className={activeClasses.aNewLanding ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("aNewLanding")}>
                        <div className='contact-option-img'>
                            <img src={AllImages.ANewLanding} alt={t("contact.option1.alt.img")} />
                        </div>
                        <div className='contact-option-title'>
                            <label>
                                {size.width <= 1024  ? t("contact.option1.titlesm") : t("contact.option1.title")  }
                      
                            </label>
                        </div>
                    </div>

                    <div className={activeClasses.aNewApp ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("aNewApp")}>
                        <div className='contact-option-img'>

                            <img src={AllImages.ANewApp} alt={t("contact.option2.alt.img")} />
                        </div>
                        <div className='contact-option-title'>
                            <label>
                                {size.width <= 1024  ? t("contact.option2.titlesm") : t("contact.option2.title")  }
                      
                            </label>
                        </div>
                    </div>

                    <div className={activeClasses.redesign ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("redesign")}>
                        <div className='contact-option-img'>
                            <img src={AllImages.Redesign} alt={t("contact.option3.alt.img")} />
                        </div>
                        <div className='contact-option-title'>
                            <label>
                                {size.width <= 1024  ? t("contact.option3.titlesm") : t("contact.option3.title")  }
                      
                            </label>
                        </div>
                    </div>

                    <div className={activeClasses.staffAugmentation ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("staffAugmentation")}>
                        <div className='contact-option-img'>
                            <img src={AllImages.StaffAugmentation} alt={t("contact.option5.alt.img")} />
                        </div>
                        <div className='contact-option-title'>
                            <label>
                                {size.width <= 1024  ? t("contact.option5.titlesm") : t("contact.option5.title")  }
                      
                            </label>
                        </div>
                    </div>
                </div>

                <div className='contact-form'>
                    {activeClasses.aNewLanding && <FrmNewLanding />}
                    {activeClasses.aNewApp && <FrmNewApp />}
                    {activeClasses.redesign && <FrmReRe />}
                    {activeClasses.generalInfo && <FrmGeneralInfo />}
                    {activeClasses.staffAugmentation && <FrmStaffAugmentation />}
                </div>
            </div>

        </div>
    )
}
