import './WhatDoWeDo.scss';

export const WhatDoWeDo = () => {
    return (
        <div className="what-do-we-do">
            <div className="header">
                <label>What do we do?</label>
                <label>We build custom software solutions to help our clients create awesome products </label>
            </div>
            <div className="cards-wrapper">
                <div className="first-element">
                    <label>I need an app for my business.</label>
                    <button>Tell us more</button>
                </div>
                <div>
                    <label>I need a landing website for my company</label>
                    <button>Tell us more</button>
                </div>
                <div>
                    <label>I need costume software  to improve comunication and conection within my company</label>
                    <button>Tell us more</button>
                </div>
                <div>
                    <label>I need to track my products in real time </label>
                    <button>Tell us more</button>
                </div>
            </div>
        </div>
    )
}
