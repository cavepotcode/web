import { useTranslation, Trans } from 'react-i18next';
import { AllImages } from '../../../helpers';
import { NavLink } from 'react-router-dom';
import './Meetup.scss'

export default function Meetup() {
    const [t] = useTranslation("global");

    return (
        <div id="meetup">
            {/* <div className='ng-logo w-border'>
                <div className='bg-left'></div>
                
                <div className='inner'>
                    <div className='bg-left'></div>
                
                </div>
                <div className='a-left'></div>
                

            </div> */}
            {/* <div className='animation-showdown'>
                <ReactSVG src={AllImages.LogoAngular} evalScripts="once"></ReactSVG>
                
            </div> */}
            
            {/* <div id="text" className='animation-showdown'>
                <p>
                    Porud sponsor Uruguayan Angular Meetup
                </p> 
            </div>
            <div className='animation-showdown'>
                <div className='button-container'>
                    <a className='button' target="_blank" href="https://www.meetup.com/es/angular-mvd/">see more!</a>
                </div>
            </div> */}

        </div>


    )
}
