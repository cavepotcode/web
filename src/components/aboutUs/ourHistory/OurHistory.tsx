import './OurHistory.scss';
import { HistoryCard } from './HistoryCard';
import { useTranslation,Trans } from "react-i18next";

export function OurHistory() {
    const [t] = useTranslation("global");
    return (
        <div className="our-history">
            <div className="title">
                This is part of our story: 
            </div>
            <div className="cards-wrapper">

                {Object.values(t('data-history', { returnObjects: true })).map((obj, index) => {
                    return(
                        <HistoryCard hitoryPoint={obj} key={index}/>
                    );
                })}

                <div className='card-conect-end'></div>
                <div className='card-conect-end'></div>
                <div className='card-conect-end'></div>

            </div>
        </div>
    );
}