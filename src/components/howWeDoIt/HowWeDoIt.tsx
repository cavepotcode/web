import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { AllImages } from '../../helpers';
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
        const img = document.querySelectorAll('.img-how-we-do-it');
        img.forEach(item => {
            observer.observe(item);
        });
    }, [])
    return (
        <div id="how-we-do-it">
            <div className="how-we-do-it">

                <div className='txt-how-we-do-it'>
                    <div className="img-how-we-do-it">
                        <img src={AllImages.Explore} alt={t("how-we-do-it.alt.img.1")} />
                    </div>

                    <div className="text-wrapper">
                        <label className="title">{t("how-we-do-it.title")}</label>
                        <label className='textpart'>
                            <Trans>{t("how-we-do-it.text1")}</Trans>
                        </label>
                        <label className='textpart'>
                            <Trans>{t("how-we-do-it.text2")}</Trans>
                        </label>
                        <label className='textpart'>
                            <Trans>{t("how-we-do-it.text3")}</Trans>
                        </label>
                        <label className='textpart'>
                            <Trans>{t("how-we-do-it.text4")}</Trans>
                        </label>
                    </div>
                </div>

            </div>
        </div>

    )
}
