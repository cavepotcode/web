import { CardDragger } from './CardDragger';

import './OurHistory.scss';

export function OurHistory() {
    return (
        <div id="our-history">
            <div className="our-history">
                <div className="title">
                    This is part of our story:
                </div>
                <CardDragger />
            </div>
        </div>

    );
}