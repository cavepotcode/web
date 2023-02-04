import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { AllImages } from '../../../helpers';
import './HowWeDoIt.scss';
export const HowWeDoIt = () => {
    const [t] = useTranslation("global");
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation');
                return;
            }
        });
    });
    useEffect(() => {
        const img = document.querySelectorAll('#how-we-do-it .img-how-we-do-it');
        img.forEach(item => {
            observer.observe(item);
        });
    }, [])
    return (
        <div id="how-we-do-it" className=''>
            <div className="how-we-do-it max-container">
                <label className="title">{t("how-we-do-it.title")}</label>
                <div className='txt-how-we-do-it'>

                    <div className="img-how-we-do-it">
                        <img src={AllImages.Explore} alt={t("how-we-do-it.alt.img.1")} />
                    </div>

                    <div className="text-wrapper">
                       
                        <label className='textpart'>
                            <label className='subtitle'> Culture </label>
                            <p><Trans>{t("how-we-do-it.text1")}</Trans></p>
                        </label>
                        <label className='textpart'>
                            <label className='subtitle'> Communication </label>
                            <p><Trans>{t("how-we-do-it.text2")}</Trans></p>
                        </label>
                        <label className='textpart'>
                            <label className='subtitle'> Team </label>
                            <p><Trans>{t("how-we-do-it.text3")}</Trans></p>
                        </label>
                        <label className='textpart'>
                            <label className='subtitle'> Commitment </label>
                            <p><Trans>{t("how-we-do-it.text4")}</Trans></p>
                        </label>
                    </div>
                </div>

            </div>
        </div>

    )
}
