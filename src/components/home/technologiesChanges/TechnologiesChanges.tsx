import data from '../../../data/data-web.json'
import { NavLink } from 'react-router-dom';
import { AllImages } from '../../../helpers';
import './TechnologiesChanges.scss';
import { headerWeb } from '../../../helpers/header';

export const TechnologiesChanges = () => {

    const technologiesChanges = data["technologies-changes"];
    const contactLink = headerWeb.links.find(link => link.label === "Contact us");
   // const HistoryList = Object.values(dataHistory);

    return (
        <div className="technologies-changes">
            <div className='max-container'>
                <div className="textwrapper animation-showup">
                    <label className="subtitle">{technologiesChanges.claim}</label>
                    <label className="title">{technologiesChanges.title}</label>
                    <label className="subtitle">{technologiesChanges.subtitle}</label>
                    <div className='button-container'>
                        <NavLink to={contactLink?.link || "/contact"}>
                            <a className='button'>{contactLink?.label}</a>
                        </NavLink>
                    </div>

                </div>
                <div className="img-technologies">
                    <img className="animation-showleft" src={AllImages.Banner} alt={technologiesChanges.alt['img.1']} loading="lazy" />
                </div>
            </div>
        </div>

    )
}
