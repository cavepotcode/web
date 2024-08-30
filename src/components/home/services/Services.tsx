import { useEffect } from 'react';
import data from '../../../data/data-web.json'
import { AllImages } from '../../../helpers';

import './Services.scss';

var delay = 0;
export const Services = () => {
    const whatDoWeDo = data["what-do-we-do"]
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation-showup');
                entry.target.style.animationDelay = delay + 's'
                delay = delay + 0.2;
                return;
            }
        });
        delay = 0;
    });



    useEffect(() => {
        const cards = document.querySelectorAll('.what-do-we-do .card');
        cards.forEach(item => {
            observer.observe(item);
        });
    }, [])


    return (
        <div className="what-do-we-do" >
            <div className='max-container'>
                <div className="title">
                    <label>{whatDoWeDo.title}</label>
                    <label>{whatDoWeDo['sub-title']}</label>
                </div>
                <div className="cards-wrapper">
                    {/* <NavLink to="/contact/aNewApp">
                    <div className='card'>
                        <div className='img-wrapper'>
                            <img src={AllImages.ANewApp} />
                        </div>
                        <label><Trans>{t("what-do-we-do.card1.title")}</Trans></label>
                        <p><Trans>{t("what-do-we-do.card1.text")}</Trans></p>
                    </div>
                </NavLink> */}
                    <div className='card'>
                        <div className='img-wrapper'>
                            <img src={AllImages.StaffAugmentation} />
                        </div>
                        <label>{whatDoWeDo.card4.title}</label>
                        <p>{whatDoWeDo.card4.text}</p>
                        {/* <NavLink to="/contact/staffAugmentation">
                        <button>
                            {whatDoWeDo.card4.button}
                        </button>
                    </NavLink> */}
                    </div>

                    <div className='card'>
                        <div className='img-wrapper'>
                            <img src={AllImages.ANewLanding} />
                        </div>
                        <label>{whatDoWeDo.card2.title}</label>
                        <p>{whatDoWeDo.card2.text}</p>
                        {/* <NavLink to="/contact/aNewLanding">
                        <button>
                            {t("what-do-we-do.card2.button")}
                        </button>
                    </NavLink> */}
                    </div>

                    <div className='card'>
                        <div className='img-wrapper'>
                            <img src={AllImages.Redesign} />
                        </div>
                        <label>{whatDoWeDo.card3.title}</label>
                        <p>{whatDoWeDo.card3.text}</p>
                        {/* <NavLink to="/contact/redesign">
                        <button>
                            {t("what-do-we-do.card3.button")}
                        </button>
                    </NavLink> */}
                    </div>




                </div>
            </div>

        </div>
    );
}
