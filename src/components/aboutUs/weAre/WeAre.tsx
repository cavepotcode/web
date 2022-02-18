import "./WeAre.scss";
import { useTranslation,Trans } from "react-i18next";
import { useEffect, useState } from "react";

export function WeAre(){
    const [t] = useTranslation("global");
    const array = Object.values(t('we-tags', { returnObjects: true }));
    let index;
    let lergoArray = array.length;
    const [count,setIndex] = useState(0);

    const updateCount = () => {
        index = !index && setInterval(() => {
            console.log('ticking: ' + count);
            setIndex(prevCount => (prevCount + 1)%lergoArray) // new
        }, 3500)
      }

    useEffect(() => {
        updateCount()
        
        return () => clearInterval(index)
      }, [])

    return (
        <div className="we-tag-wrapper">
             <div id="are" className="are">
                <Trans> <label>{ array[count] } </label> </Trans>
            </div>
            
            <div className="text-wrapper">
                <label>
                    {t("we-wanna.text")}
                </label>
                <button>
                    {t("we-wanna.button")}
                </button>
            </div>
        </div>
    );
}