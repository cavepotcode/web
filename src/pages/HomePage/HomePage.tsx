import { useParams } from "react-router-dom";
import { ClientSay } from "../../components/clientSay/ClientSay";
import { HowWeDoIt } from "../../components/howWeDoIt/HowWeDoIt";
import { Investigation } from "../../components/investigation/Investigation";
import { TechnologiesChanges } from "../../components/technologiesChanges/TechnologiesChanges";
import { TechnologiesThatWeUse } from "../../components/technologiesThatWeUse/TechnologiesThatWeUse";
import { WhatDoWeDo } from "../../components/whatDoWeDo/WhatDoWeDo";
import WhatIsCavepot from "../../components/whatIsCavepot/WhatIsCavepot";
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
            <TechnologiesChanges />
            <WhatIsCavepot />
            <WhatDoWeDo />
            <HowWeDoIt />
            <TechnologiesThatWeUse />
            <ClientSay />
            <Investigation />
        </div>
    );
}