import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
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
    const [size, setSize] = useState<Size>({ width: window.innerWidth, height: window.innerHeight });
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState(undefined);
    let params = useParams();
    console.log(window.location.protocol);
    let param;
    if (params.frm)
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

    const submitFunction = async (values) => {
        try {
            showModal();
            const host = `${window.location.protocol}://${window.location.host}`;
            const response: any = await fetch(`/api/contact/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })
            const data = await response.json();
            setMessage(data.Message);
            return data;
        } catch (e) {
            setMessage('Something went wrong, please try again')
        }

    }

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
        setMessage(undefined);
    }
    return (
        <div id="contact">
            <div className="contact max-container">
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
                                    {size.width <= 1024 ? t("contact.option4.titlesm") : t("contact.option4.title")}

                                </label>
                            </div>
                        </div>

                        <div className={activeClasses.aNewApp ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("aNewApp")}>
                            <div className='contact-option-img'>

                                <img src={AllImages.ANewApp} alt={t("contact.option2.alt.img")} />
                            </div>
                            <div className='contact-option-title'>
                                <label>
                                    {/* {size.width <= 1024 ? t("contact.option2.titlesm") : t("contact.option2.title")} */}
                                    {t("what-do-we-do.card2.title")}
                                </label>
                            </div>
                        </div>

                        <div className={activeClasses.redesign ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("redesign")}>
                            <div className='contact-option-img'>
                                <img src={AllImages.Redesign} alt={t("contact.option3.alt.img")} />
                            </div>
                            <div className='contact-option-title'>
                                <label>
                                    {/* {size.width <= 1024 ? t("contact.option3.titlesm") : t("contact.option3.title")} */}
                                    {t("what-do-we-do.card3.title")}
                                </label>
                            </div>
                        </div>

                        <div className={activeClasses.staffAugmentation ? 'contact-option-card selected' : 'contact-option-card'} onClick={() => toggleClass("staffAugmentation")}>
                            <div className='contact-option-img'>
                                <img src={AllImages.StaffAugmentation} alt={t("contact.option5.alt.img")} />
                            </div>
                            <div className='contact-option-title'>
                                <label>
                                    {/* {size.width <= 1024 ? t("contact.option5.titlesm") : t("contact.option5.title")} */}
                                    {t("what-do-we-do.card4.title")}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={activeClasses.generalInfo ? 'contact-form border-radius-left' : activeClasses.staffAugmentation ? 'contact-form border-radius-right' : 'contact-form'}>
                        {activeClasses.aNewLanding && <FrmNewApp submitFunction={submitFunction} />}
                        {activeClasses.aNewApp && <FrmNewApp submitFunction={submitFunction} />}
                        {activeClasses.redesign && <FrmReRe submitFunction={submitFunction} />}
                        {activeClasses.generalInfo && <FrmGeneralInfo submitFunction={submitFunction} />}
                        {activeClasses.staffAugmentation && <FrmStaffAugmentation submitFunction={submitFunction} />}
                    </div>
                </div>
                {modal && <div className="modal">

                    <div className="dialog">
                        {message && <div>
                            <div className="close" onClick={closeModal}>
                                x
                            </div>
                            <p>
                                {message}
                            </p></div>}
                        {!message && <img src={AllImages.Loading} />}
                    </div>
                </div>}
            </div>
        </div>


    )
}
