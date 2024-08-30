import { AllImages } from '../../../helpers';
import data from '../../../data/data-web.json';
import './WhereNameComeFrom.scss'

export function WhereNameComeFrom() {
    const whyDoWeExist = data['why-do-we-exist']
    const nameComeFrom = data['name-come-from']

    return (
        <div id="where-name-come-from">
            <div className="where-name-come-from max-container">
                <div className="img-wrapper">
                    <img className="pot" src={AllImages.AboutUsTeam} alt={whyDoWeExist.alt['img.1']} />
                    <img className="pot" src={AllImages.AboutUsTeam2} alt={whyDoWeExist.alt['img.1']} />
                </div>
                <div className="text-wrapper">
                    <label className="title">{nameComeFrom['title.1']}</label>
                    <label className="textpart">{nameComeFrom['text.part.1']}</label><br/>
                    <label className="textpart">{nameComeFrom['text.part.2']}</label><br/>
                    <label className="textpart">{nameComeFrom['text.part.3']}</label>

                </div>
            </div>
        </div>

    );

}