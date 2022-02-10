
import './HistoryCard.scss';
import { Trans } from "react-i18next";
import React from "react";


import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function HistoryCard( data ){

  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(data.id);

    return(
        <div className='single-card no-select'>
            <div className='history-point'>
                <div className='card'>
                    <div className='card-header'>
                        <label> {data.hitoryPoint.id} </label>
                        <div className='sphere2'></div>
                    </div>

                    <div className='card-text'>
                        <label>
                            <Trans>{data.hitoryPoint.text}</Trans>
                        </label>
                    </div>
                </div>
                {
                    data.hitoryPoint.subTitle != '' && (
                        <div className='sub-card'>
                            <div className='card-sub-conect'></div>
                            <div className='card'>
                                <div className='card-text bold'>
                                    <label>
                                        { data.hitoryPoint.subTitle }
                                    </label>
                                </div>
                                <div className='card-text'>
                                    <label>
                                        <Trans>{ data.hitoryPoint.text2 }</Trans>
                                    </label>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className='card-conect'></div>
        </div>      
    );
}