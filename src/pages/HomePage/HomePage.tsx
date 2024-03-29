import { useParams } from "react-router-dom";
import { ClientSay } from "../../components/home/clientSay/ClientSay";
import { HowWeDoIt } from "../../components/home/howWeDoIt/HowWeDoIt";
import { Investigation } from "../../components/home/investigation/Investigation";
import { TechnologiesChanges } from "../../components/home/technologiesChanges/TechnologiesChanges";
import { TechnologiesThatWeUse } from "../../components/home/technologiesThatWeUse/TechnologiesThatWeUse";
import { Services } from "../../components/home/services/Services";
import Meetup from "../../components/home/meetup/Meetup";
import WhatIsCavepot from "../../components/home/whatIsCavepot/WhatIsCavepot";
import { Link, scroller, animateScroll as scroll } from 'react-scroll';

import './HomePage.scss';
import { useEffect } from "react";


export function HomePage() {
    let params = useParams();
    useEffect(() => {
        if (params.menu) {
            scrollToSection(params.menu)
        }
    }, [params.menu]); 

    

    function scrollToSection(section) {
        section = `#${section}`;
        const element = document.querySelector(section);
        scroll.scrollTo(element.offsetTop);
    }

    return (
        <div className="home-page">
            <Meetup/>
            <TechnologiesChanges />
            
            {/* <WhatIsCavepot /> */}
            <Services />
            
            <HowWeDoIt />
            <ClientSay />
            {/* <TechnologiesThatWeUse /> */}
            
            <Investigation />
        </div>
    );
}