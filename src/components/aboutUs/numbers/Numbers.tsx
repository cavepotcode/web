import { useEffect, useState } from "react";
import { NumberElement } from "./NumberElement";
import "./Numbers.scss";

export function Numbers({ numbers }) {


    return (
        <div id="numbers" >
            <div className="max-container">
                {numbers.map((elem) => 
                        <NumberElement element={elem}/>
                    )}

            </div>
        </div>
    );
}