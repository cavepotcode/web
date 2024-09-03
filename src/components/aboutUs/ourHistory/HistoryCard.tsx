import "./HistoryCard.scss";
import { useContext } from "react";
import DOMPurify from 'dompurify';

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function HistoryCard({
  historyPoint,
  itemId,
}: {
  historyPoint: any;
  itemId: string;
}) {
  const visibility = useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  const historyText = DOMPurify.sanitize(historyPoint.text);

  return (
    <div className="single-card no-select">
      <div className="card-conect left"></div>
      <div className="history-point">
        <div className="card">
          <div className="card-header">
            <label> {historyPoint.id} </label>
            <div className="sphere2"></div>
          </div>

          <div className="card-text">
            <label
              dangerouslySetInnerHTML={{ __html: historyText }}
            />
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
      <div className="card-conect"></div>
    </div>
  );
}
