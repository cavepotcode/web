import { useEffect } from 'react';
import data from '../../../data/data-web.json';
import { AllImages } from '../../../helpers';
import './HowWeDoIt.scss';

export const HowWeDoIt = () => {
    const howWeDoIt = data["how-we-do-it"];
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
    }, [observer])
    return (
        <div id="how-we-do-it" className=''>
            <div className="how-we-do-it max-container">
                <label className="title">{howWeDoIt.title}</label>
                <div className='txt-how-we-do-it'>

                    <div className="img-how-we-do-it">
                        <img src={AllImages.Explore} alt={howWeDoIt.alt['img.1']} />
                    </div>

                    <div className="text-wrapper">
                       
                        <label className='textpart'>
                            <label className='subtitle'> Culture </label>
                            <p>{howWeDoIt.text1}</p>
                        </label>
                        <label className='textpart'>
                            <label className='subtitle'> Communication </label>
                            <p>{howWeDoIt.text2}</p>
                        </label>
                        <label className='textpart'>
                            <label className='subtitle'> Team </label>
                            <p>{howWeDoIt.text3}</p>
                        </label>
                        <label className='textpart'>
                            <label className='subtitle'> Commitment </label>
                            <p>{howWeDoIt.text4}</p>
                        </label>
                    </div>
                </div>

            </div>
        </div>

    )
}
