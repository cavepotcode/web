import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AllImages } from '../../helpers';
import './Investigation.scss';

export const Investigation = () => {
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
        const cards = document.querySelectorAll('img');
        cards.forEach(item => {
            observer.observe(item);
        });
    }, [])
    return (
        <div className="investigation">


            <div className="text-wrapper">
                <img className="banner2" src={AllImages.Banner2} alt={t("investigation.alt.img.1")} />
                <img className="banner3" src={AllImages.Banner3} alt={t("investigation.alt.img.1")} />
                <div className="main-text-wrapper">
                    <label className="title">{t("investigation.title")}</label>
                    <label>{t("investigation.text.1")}</label>
                    <label>{t("investigation.text.2")}</label>
                </div>
                <a href={t("links.header.our-lab.link")}>
                    <button>{t("investigation.button")}</button>
                </a>
            </div>

        </div>
    )
}
