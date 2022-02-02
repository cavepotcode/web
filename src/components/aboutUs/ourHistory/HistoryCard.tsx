export interface HistoryCardProps{
    id: number;
    text: string;
    subTitle: string;
    text2: string;


}

export function HistoryCard( { id, text, subTitle,text2 } : HistoryCardProps){
    return(
        <div className='single-card'>
            <div className='history-point'>
                <div className='card'>
                    <div className='card-header'>
                        <label> {id} </label>
                        <div className='sphere2'></div>
                    </div>

                    <div className='card-text'>
                        <label>
                            {text}
                        </label>
                    </div>
                </div>
                {
                    subTitle != '' && (
                        <div className='sub-card'>
                            <div className='card-sub-conect'></div>
                            <div className='card'>
                                <div className='card-text bold'>
                                    <label>
                                        { subTitle }
                                    </label>
                                </div>
                                <div className='card-text'>
                                    <label>
                                        { text2 }
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