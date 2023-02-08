import "./WeAre.scss";
import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import { AllImages } from "../../../helpers";
import { NavLink } from "react-router-dom";

export function WeAre() {
    const [t] = useTranslation("global");
    const array = Object.values(t('we-tags', { returnObjects: true }));
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
                            {t("we-wanna.text")}
                        </label>



                    </div>
                    <div className="button-container">
                        <NavLink to="/contact">

                            {t("we-wanna.button")}

                        </NavLink>
                    </div>
                </div>

            </div>
        </div>

    );
}