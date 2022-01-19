import { TechnologiesChanges } from "../../components/technologiesChanges/TechnologiesChanges";
import { WhatDoWeDo } from "../../components/whatDoWeDo/WhatDoWeDo";
import WhatIsCavepot from "../../components/whatIsCavepot/WhatIsCavepot";

import './HomePage.scss';
export function HomePage() {
    return (
        <div className="home-page">
            <TechnologiesChanges />
            <WhatIsCavepot />
            <WhatDoWeDo />
        </div>
    );
}