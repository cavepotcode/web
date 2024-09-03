import "./WeAre.scss";
import { useEffect, useState } from "react";
import data from '../../../data/data-web.json';
import { NavLink } from "react-router-dom";

export function WeAre() {
    const weWanna = data["we-wanna"]
    const weTags = data["we-tags"];
    const array = Object.values(weTags);
    let index;
    let lergoArray = array.length;
    const [count, setIndex] = useState(0);

    const updateCount = () => {
        index = !index && setInterval(() => {
            setIndex(prevCount => (prevCount + 1) % lergoArray) // new     
        }, 3000)
    }

    useEffect(() => {
        updateCount()

        return () => clearInterval(index)
    }, [])

    return (
        <div id="we-tag-wrapper">
            <div className="we-tag-wrapper max-container">

                <div className="dig">

                    <div className="text-wrapper">
                        <label>
                            {weWanna.text}
                        </label>



                    </div>
                    <div className="button-container">
                        <NavLink to="/contact">

                            {weWanna.button}

                        </NavLink>
                    </div>
                </div>

            </div>
        </div>

    );
}