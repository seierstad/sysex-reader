"use strict";

import {html, useState} from "imports";

import {groupReducer} from "../../../functions.js";

import PolarPlot from "./polar-plot.js";


const wavetablePicker = ({slot, name}) => `${slot}-${name}`;
const wavetableGroupReducer = groupReducer(wavetablePicker);

const shift = {
    x: 1,
    y: 2
};

function scale (input) {
    return input * -50;
}

function pathDataReducer (offset) {

    return (acc, curr, index, arr) => {
        switch (index) {
        case 0:
            return `M0,${scale(0) + offset + 50}v${scale(curr)}`;
        case 1:
            return `${acc}l1,${scale(curr - arr[index - 1])}`;
        case (arr.length - 1):
            return `${acc} 1,${scale(curr - arr[index - 1])}v${scale(-curr)}`;
        default:
            return `${acc} 1,${scale(curr - arr[index - 1])}`;
        }
    };
}


const Wave = (props) => {
    const {
        index,
        arr,
        wave,
        selected
    } = props;

    const offset = arr.length * shift.y;

    const classes = ["wavetable-wave"];
    if (selected) {
        classes.push("selected");
    }

    return html`
        <path
            class=${classes.join(" ")}
            d="${wave.reduce(pathDataReducer(offset), "")}"
            key="wave-${index}"
            transform="translate(${index * shift.x}, ${index * -shift.y})"
        />
    `;
};


const Wavetable = (props) => {
    const {
        messages = []
    } = props;

    const [selected, setSelected] = useState(0)

    const handleSelect = (event) => {
        setSelected(parseInt(event.target.value), 10);
        event.stopPropagation();
    };

    const waves = messages.map(({wave}) => wave.float);

    return html`
        <dl>
            <dt>slot</dt>
            <dd>${messages[0].slot}</dd>
            <dt>name</dt>
            <dd>${messages[0].name}</dd>
        </dl>
        <${PolarPlot} waves="${waves}" selected=${selected}/>
        <svg
            className="wavetable-data"
            height="100%"
            viewBox="0 0 ${waves[0].length + Math.ceil(waves.length * shift.x)} ${100 + Math.ceil(shift.y * waves.length)}"
            width="100%"
        >
            ${waves.map((w, i, a) => html`<${Wave} 
                wave=${w}
                index=${i}
                key=${messages[0].slot + messages[0].name + i}
                arr=${a}
                selected=${i === selected}
            />`)}
        </svg>
        <input max=${waves.length - 1} min=${0} onInput=${handleSelect} type="range" value=${selected || 0} />
    `;
};

const WavetableDumpView = (props) => {
    const {
        messages = []
    } = props;

    const groupedByWavetable = messages.reduce(wavetableGroupReducer, {});

    const wavetables = Object.entries(groupedByWavetable)
        .map(([key, messages]) =>
            html`<${Wavetable} key=${key} messages=${messages} />`
        );

    return html`<div>
        <h6>Wavetable dump</h6>
        ${wavetables}
    </div>`;
};


export default WavetableDumpView;
