
import './HistoryCard.scss';
import { Trans } from "react-i18next";
import React from "react";


import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function HistoryCard( {
    hitoryPoint,
    itemId
  }: {
    hitoryPoint: any;
    itemId: string;
  } ){

  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

    return(
        <div className='single-card no-select'>
            <div className='card-conect left'></div>
            <div className='history-point'>
                <div className='card'>
                    <div className='card-header'>
                        <label> {hitoryPoint.id} </label>
                        <div className='sphere2'></div>
                    </div>

                    <div className='card-text'>
                        <label>
                            <Trans>{hitoryPoint.text}</Trans>
                        </label>
                    </div>
                </div>
                {
                    // hitoryPoint.subTitle != '' && (
                    //     <div className={visible ? 'sub-card' : 'sub-card-no'}>
                    //         <div className='card-sub-conect'></div>
                    //         <div className='card'>
                    //             <div className='card-text bold'>
                    //                 <label>
                    //                     { hitoryPoint.subTitle }
                    //                 </label>
                    //             </div>
                    //             <div className='card-text'>
                    //                 <label>
                    //                     <Trans>{ hitoryPoint.text2 }</Trans>
                    //                 </label>
                    //             </div>
                    //         </div>
                    //     </div>)
                }
            </div>
            <div className='card-conect'></div>
        </div>      
    );
}