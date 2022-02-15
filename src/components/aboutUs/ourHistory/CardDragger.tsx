
import React from "react";

import { HistoryCard } from './HistoryCard';
import { useTranslation,Trans } from "react-i18next";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./Arrows";

import './CardDragger.scss';
import useDrag from '../../dragger/useDrag';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;


  
export function CardDragger() {

    const [t] = useTranslation("global");

    const elemPrefix = "test";
    const getId = (index: number) => `${elemPrefix}${index}`;

    const getItems = () =>
    Object.values(t('data-history', { returnObjects: true }))
    .map((obj, ind) => ({ data: obj,id: getId(ind) }));


    const [items] = React.useState(getItems);


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
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                    onMouseDown={() => dragStart}
                    onMouseUp={() => dragStop}
                    onMouseMove={handleDrag}
                >    
                <div className="dragg-cards-wrapper">
                    {/* {items.map(( obj, key ) => (
                        <HistoryCard hitoryPoint={obj.data} itemId={obj.id} />
                    ))}    */}
                    <HistoryCard
                        hitoryPoint={{
                            id: 2017,
                            text: "prueba",
                            subTitle: "prueba2",
                            text2: "prueba3"
                        }}
                        itemId="test1"
                    />
                    <HistoryCard
                        hitoryPoint={{
                            id: 2017,
                            text: "prueba",
                            subTitle: "prueba2",
                            text2: "prueba3"
                        }}
                        itemId="test1"
                    />
                    <HistoryCard
                        hitoryPoint={{
                            id: 2017,
                            text: "prueba",
                            subTitle: "prueba2",
                            text2: "prueba3"
                        }}
                        itemId="test1"
                    />
                    <HistoryCard
                        hitoryPoint={{
                            id: 2017,
                            text: "prueba",
                            subTitle: "prueba2",
                            text2: "prueba3"
                        }}
                        itemId="test1"
                    />
                    <div className="card-conect-end" />
                    <div className="card-conect-end" />
                    <div className="card-conect-end" />
                </div>
                </ScrollMenu>
        </div>
    );
}