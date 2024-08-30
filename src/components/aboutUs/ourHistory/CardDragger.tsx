import React from "react";

import { HistoryCard } from './HistoryCard';
import { ScrollMenu, VisibilityContext,getItemsPos } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./Arrows";

import './CardDragger.scss';
import useDrag from '../../dragger/useDrag';
import data from '../../../data/data-web.json';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
  
export function CardDragger() {

    const dataHistory = data["data-history"];
    const HistoryList = Object.values(dataHistory);

    const elemPrefix = "test";
    const getId = (index: number) => `${elemPrefix}${index}`;

    const getItems = () =>
    HistoryList.map((obj, ind) => ({ data: obj,id: getId(ind) }));


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

        const centerOnInit = ({
            getItemById,
            scrollToItem,
            visibleItems
          }: scrollVisibilityApiType) => {
            const { center: centerItemKey } = getItemsPos(visibleItems);
            scrollToItem(getItemById(centerItemKey), "auto", "center");
          };

    return (
        <div className="card-dragger" onMouseLeave={dragStop}> 
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                    onMouseDown={() => dragStart}
                    onMouseUp={({
                        getItemById,
                        scrollToItem,
                        visibleItems
                      }: scrollVisibilityApiType) => () => {
                        // NOTE: for center items
                        dragStop();
                        const { center } = getItemsPos(visibleItems);
                        scrollToItem(getItemById(center), "smooth", "center");
                      }}
                    onMouseMove={handleDrag}
                    onInit={centerOnInit}
                >    
                    {items.map(( obj, key ) => (
                        <HistoryCard  key={`year_${key}`}  historyPoint={obj.data} 
                                        itemId={obj.id} />
                    ))}   

                </ScrollMenu>
        </div>
    );
}