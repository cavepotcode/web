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
        <div className="we-tag-wrapper">
            <div id="are" className="are">
                <Trans> <label className="are-label animation" >{array[count]} </label> </Trans>
            </div>
            <div className="dig">

                <div className="text-wrapper">
                    <label>
                        {t("we-wanna.text")}
                    </label>
                    <NavLink to="/contact">
                        <button>
                            {t("we-wanna.button")}
                        </button>
                    </NavLink>

                </div>
                <div className="img-wrapper">
                    <img src={AllImages.AboutUsDig} alt={t("why-do-we-exist.alt.img.1")} />
                </div>
            </div>

        </div>
    );
}