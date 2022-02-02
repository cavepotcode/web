import "./WeTags.scss";
import dataTags from "./dataTags"

export function WeTags(){
    return (
        <div className="we-tag-wrapper">
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
    );
}