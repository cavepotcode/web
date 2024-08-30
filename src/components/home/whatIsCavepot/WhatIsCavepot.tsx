import data from '../../../data/data-web.json'
import { NavLink } from 'react-router-dom';
import './WhatIsCavepot.scss'

export default function WhatIsCavepot() {
    const whatIsCavepot = data["what-is-cavepot"];

    return (
        <div className="what-is-cavepot max-container"> 
            <div className="title-wrapper">
                <label className="title">{whatIsCavepot.title}</label>
                {/* <label><Trans>{t("what-is-cavepot.text1")}</Trans></label> */}
                <label>{whatIsCavepot.text2}</label>
                {/* <label><Trans>{t("what-is-cavepot.text3")}</Trans></label> */}
            </div>
            {/* <div  id="blue-line"></div> */}
            <div className="wrapper">


                <div className="message-container">
                    <NavLink to="/contact">
                        <button>{whatIsCavepot.message}</button>
                    </NavLink>
                </div>
            </div>
            {/* <div id="short-blue-line"></div> */}

        </div>

    )
}
