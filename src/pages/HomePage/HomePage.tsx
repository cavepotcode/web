import { useParams } from "react-router-dom";
import { ClientSay } from "../../components/clientSay/ClientSay";
import { HowWeDoIt } from "../../components/howWeDoIt/HowWeDoIt";
import { Investigation } from "../../components/investigation/Investigation";
import { TechnologiesChanges } from "../../components/technologiesChanges/TechnologiesChanges";
import { TechnologiesThatWeUse } from "../../components/technologiesThatWeUse/TechnologiesThatWeUse";
import { WhatDoWeDo } from "../../components/whatDoWeDo/WhatDoWeDo";
import WhatIsCavepot from "../../components/whatIsCavepot/WhatIsCavepot";
import { Link, scroller } from 'react-scroll';

import './HomePage.scss';
import { useEffect } from "react";
export function HomePage() {
    let params = useParams();

    if (params.menu) {

        scroller.scrollTo(params.menu, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }

    useEffect(() => {
        if (params.menu) {
            scroller.scrollTo(params.menu, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
        // code to run after render goes here
    }, []); // <-- empty array means 'run once'

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