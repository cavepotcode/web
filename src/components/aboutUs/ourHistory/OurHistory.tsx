import './OurHistory.scss';
import dataHistory from './dataHistory';
import { HistoryCard } from './HistoryCard';

export function OurHistory() {
    return (
        <div className="our-history">
            <div className="title">
                This is part of our story: 
            </div>
            <div className="cards-wrapper">

                {dataHistory.map((obj, index) => {
                    return(
                        <HistoryCard id={obj.id} 
                                    text={obj.text} 
                                    subTitle={obj.subTitle} 
                                    text2={obj.text2}/>
                    );
                })}

                <div className='card-conect-end'></div>
                <div className='card-conect-end'></div>
                <div className='card-conect-end'></div>

            </div>
        </div>
    );
}