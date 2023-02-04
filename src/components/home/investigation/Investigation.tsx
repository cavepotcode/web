import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AllImages } from '../../../helpers';
import './Investigation.scss';

export const Investigation = () => {
    const [t] = useTranslation("global");
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation-showleft');
                return;
            }
        });
    });



    useEffect(() => {
        const cards = document.querySelectorAll('#investigation .card');
        cards.forEach(item => {
            observer.observe(item);
        });
    }, [])
    return (
        <div id="investigation">
            <div className="investigation max-container">


                <div className="text-wrapper">
                    {/* <img className="banner2" src={AllImages.Banner2} alt={t("investigation.alt.img.1")} />
                    <img className="banner3" src={AllImages.Banner3} alt={t("investigation.alt.img.1")} /> */}
                    <div className="main-text-wrapper">
                        <label className="title">{t("investigation.title")}</label>
                        <label>{t("investigation.text.1")}</label>
                        <label>{t("investigation.text.2")}</label>
                    </div>

                    <div className='button-container'>
                        <a href={t("links.header.our-lab.link")} target="_blank">
                            <a className='button'>{t("investigation.button")}</a>
                        </a>
                    </div>
                </div>
                <div className='img-container'>
                    <div className='card'>
                        <div className='img-card'>
                            <img className="banner2" src={AllImages.Learn} alt={t("investigation.alt.img.1")} />
                        </div>
                        <p className='title'>Learn</p>
                        <p>to create</p>
                    </div>
                    <div className='card'>
                        <div className='img-card'>
                            <img className="banner2" src={AllImages.Create} alt={t("investigation.alt.img.1")} />
                        </div>
                        <p className='title'>Create</p>
                        <p>to disrupt</p>
                    </div>
                    <div className='card'>
                        <div className='img-card'>
                            <img className="banner2" src={AllImages.Disrupt} alt={t("investigation.alt.img.1")} />
                        </div>
                        <p className='title'>Disrupt</p>
                        <p>to discover</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
