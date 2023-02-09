import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { initReactI18next, useTranslation } from 'react-i18next';
import { AllImages } from '../../../helpers';
import LogoSlider from '../../logo-slider/LogoSlider';
import './ClientSay.scss';
import { useEffect, useState } from 'react';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';


export const ClientSay = () => {
    const [t] = useTranslation("global");
    const [estado, setEstado] = useState(false);

    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute("src", 'https://widget.clutch.co/static/js/widget.js');
        script.setAttribute("type", "text/javascript");
        head.appendChild(script);
        script.onload = () => {
            // @ts-expect-error Apparently we have to manually do this!! 🗑️
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            window.CLUTCHCO.Init()
        }
        return () => {
            script.remove();
        }
    })

    return (
        <div className="client-say">
            <div className='max-container'>
                <div className="title">
                    <label>Delivering Tailored Solutions for</label>
                </div>
            </div>
            <LogoSlider />
            <div className='max-container reviews'>

                <div className="label-wrapper">
                    <FontAwesomeIcon className="faicon" icon={faQuoteLeft} />
                    <label>{t("clients-says.title")}</label>
                </div>
                <div className="right-container">
                    <div className="clutch-widget" data-url="https://widget.clutch.co"
                        data-widget-type="12" data-height="375" data-nofollow="true" data-expandifr="true"
                        data-scale="100"
                        data-reviews="2031073,2024617,1450079,1270286,1249757,951683,620023"
                        data-clutchcompany-id="592393"></div>
                </div>
            </div>
        </div>
    )
}
