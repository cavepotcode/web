import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { AllImages } from '../../../helpers';
import './TechnologiesThatWeUse.scss';
let delay = 3
export const TechnologiesThatWeUse = () => {
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
        const cards = document.querySelectorAll('.logo');
        cards.forEach(item => {
            observer.observe(item);
        });
    }, [])
    return (
        <div className="technologies-that-we-use">
            <div className='max-container'>
                <label className="title">{t("technologies-that-we-use.title")}</label>
                <div className="logo-container">
                    <div className="img-wrapper">
                        <img className='logo bigger' src={AllImages.PhytonLogoLinea} alt="phyton-logo" />
                        <img className='logo' src={AllImages.AngularLogoLinea} alt="angular-logo" />
                        <img className='logo' src={AllImages.MicrosoftNetLogoLinea} alt="microsoft-net-logo" />
                        <img className='logo bigger' src={AllImages.ReactLogoLinea} alt="react-logo" />
                        <img className='logo' src={AllImages.NodeLogoLinea} alt="node-logo" />
                        <img className='logo' src={AllImages.NetCoreLogoLinea} alt="net-core-logo" />
                    </div>
                </div>
            </div>


            <div className="blue-line-wrapper">
                <label><Trans>{t("technologies-that-we-use.text")}</Trans></label>
                {/* <div id="blue-line"></div> */}
            </div>
        </div>
    )
}
