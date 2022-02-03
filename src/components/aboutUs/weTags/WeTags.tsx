import "./WeTags.scss";
import dataTags from "./dataTags"
import { useTranslation } from "react-i18next";

export function WeTags(){
    const [t] = useTranslation("global");
    
    return (
        <div className="we-tag-wrapper">
            <div className="tags">
                {dataTags.map( (obj, index) => {
                    return (
                        <div className="tag">
                            <label>
                                {obj.text}
                            </label>
                        </div>
                    );
                })}
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