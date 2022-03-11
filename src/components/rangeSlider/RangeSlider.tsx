import { useField } from "formik";
import { useEffect, useState } from "react";
import "./RangeSlider.scss";


export interface RangeSliderPorps {
    name: string;
    minValue: number;
    maxValue: number;
    stepValue: number;
}

export function RangeSlider( { name, minValue, maxValue, stepValue }: RangeSliderPorps) {
    
    const [_,__,helpers] = useField(name);
    const [rangeval, setRangeval] = useState(minValue);

    useEffect( () => {
        helpers.setValue(rangeval);
    },[rangeval]);
    
    return (
        <div className="slider-wrapper">
            <div className="slider-field">
                <span>USD</span>
                <input name="budget" 
                    type='range' 
                    min={minValue} 
                    max={maxValue}
                    step={stepValue}
                    value={rangeval}
                    onChange={(event) => setRangeval(event.target.valueAsNumber)} />
                <span className="slider-value">{rangeval == maxValue? "+"+rangeval: rangeval}</span>
            </div>
        </div>
    );
}