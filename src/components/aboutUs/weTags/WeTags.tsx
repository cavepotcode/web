import "./WeTags.scss";
import { useTranslation,Trans } from "react-i18next";
export function WeTags(){
    const [t] = useTranslation("global");
    return (
        <div className="we-tag-wrapper">
            <div className="tags">
                {Object.values(t('we-tags', { returnObjects: true })).map( (obj, index) => {
                    return (
                        <div className="tag">
                            <label>
                                <Trans> {obj} </Trans>
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