import { ClientSay } from "../../components/clientSay/ClientSay";
import { HowWeDoIt } from "../../components/howWeDoIt/HowWeDoIt";
import { Investigation } from "../../components/investigation/Investigation";
import { TechnologiesChanges } from "../../components/technologiesChanges/TechnologiesChanges";
import { TechnologiesThatWeUse } from "../../components/technologiesThatWeUse/TechnologiesThatWeUse";
import { WhatDoWeDo } from "../../components/whatDoWeDo/WhatDoWeDo";
import WhatIsCavepot from "../../components/whatIsCavepot/WhatIsCavepot";

import './HomePage.scss';
export function HomePage() {
    return (
        <div className="home-page">
            <TechnologiesChanges />
            <WhatIsCavepot />
            <section id="#how-we-do-it">
                <WhatDoWeDo />
            </section>
            <HowWeDoIt />
            <TechnologiesThatWeUse />
            <ClientSay />
            <Investigation />
        </div>
    );
}