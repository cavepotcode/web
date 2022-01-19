import { useState } from "react";
import "./RangeSlider.scss";

export function RangeSlider() {
    const [rangeval, setRangeval] = useState("1000");

    return (
        <div className="slider-wrapper">
            <div className="slider-value">
                <span>{rangeval}</span>
            </div>
            <div className="slider-field">
                <input name="budget" 
                    type='range' 
                    min={1000} 
                    max={100000}
                    step="500"
                    value={rangeval}
                    onChange={(event) => setRangeval(event.target.value)} />
            </div>
        </div>
    );
}