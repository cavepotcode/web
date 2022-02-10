
import React from "react";

import { HistoryCard } from './HistoryCard';
import { useTranslation,Trans } from "react-i18next";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import './CardDragger.scss';
import useDrag from '../../dragger/useDrag';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;


  
export function CardDragger() {

    const [t] = useTranslation("global");

    const { dragStart, dragStop, dragMove } = useDrag();

    const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
        ev: React.MouseEvent
    ) =>
        dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
        }
        });


    return (
        <div onMouseLeave={dragStop}> 
                <ScrollMenu
                    onMouseDown={() => dragStart}
                    onMouseUp={() => dragStop}
                    onMouseMove={handleDrag}
                >    
                <div className="cards-wrapper">
                    {Object.values(t('data-history', { returnObjects: true })).map((obj, index) => (
                                                        <HistoryCard hitoryPoint={obj} key={index}/>
                    ))}   
                    
                    <div className="card-conect-end" />
                    <div className="card-conect-end" />
                    <div className="card-conect-end" />
                </div>
                </ScrollMenu>
        </div>
    );
}