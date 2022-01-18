import { TechnologiesChanges } from "../../components/technologiesChanges/TechnologiesChanges";
import WhatIsCavepot from "../../components/whatIsCavepot/WhatIsCavepot";
import { WhatDoWeDo } from "../../components/whatWeDo/WhatDoWeDo";

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