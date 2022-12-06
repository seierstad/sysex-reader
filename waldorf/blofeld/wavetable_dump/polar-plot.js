"use strict";
import {html, useState} from "imports";

/*

// Move to cartesian coordinates x,y
function move(pathArray, x, y)
{
  pathArray.push('M', x, y);
}
*/

function polarToCartesian (radius, angle) {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {x, y};
}


function polarDataReducer (angleIncrement, offset = 1, scale = 1) {
	/*
	const r = (offset - 1) * scale;
	const minusOnePath = offset <= 1 ? "" : `
		M${r}, 0
		A${r} ${r} 0 0 0 0 ${-r}
		A${r} ${r} 0 0 0 ${-r} 0
		A${r} ${r} 0 0 0 0 ${r}
		A${r} ${r} 0 0 0 ${r} 0
		Z`;
	*/	

    return (acc, curr, index, arr) => {
        const angle = angleIncrement * index;
        const {x, y} = polarToCartesian((curr + offset) * scale, angle);

        switch (index) {
        case 0:
            return `M${x},${y}`;
        case 1:
            return `${acc}L${x},${y} `;
        case (arr.length - 1):
            return `${acc} ${x},${y}z`;
            // return `${acc} ${x},${y}z ${minusOnePath}`;
        default:
            return `${acc} ${x},${y} `;
        }
    };
}


const PolarPlot = (props) => {
    const {
        waves = [], // array of arrays of numbers between -1 and 1
        offset: o = 2, // zero is this far from center (unscaled)
        scale = 100,
        selected = 0
    } = props;

    const [offset, setOffset] = useState(o);

    const handleOffset = (event) => {
        event.stopPropagation();
        setOffset(parseFloat(event.target.value));
    };

    const angleIncrement = (Math.PI * 2) / (waves[0].length + 1);

    const startCoord = -(offset + 1) * scale;
    const widthHeight = (offset + 1) * scale * 2;
    return html`
    	<div>
    	<input type="range" step="0.1" min="0" max="2" onInput=${handleOffset} />
        <svg class="polar-plot" viewBox="${startCoord} ${startCoord} ${widthHeight} ${widthHeight}">
            <circle class="minus-one" cx="0" cy="0" r=${(offset - 1) * scale} fill="none" />    
            <circle class="zero" cx="0" cy="0" r=${offset * scale} fill="none" />
            <circle class="plus-one" cx="0" cy="0" r=${(offset + 1) * scale} fill="none" />
            ${waves.map((wave, index) => html`
                <path class="wave ${selected === index ? "selected" : ""}"
                    d=${wave.reduce(polarDataReducer(angleIncrement, offset, scale), "")}
                    key=${index}
                />
            `)}
        </svg>
        </div>
    `;
};



export default PolarPlot;
