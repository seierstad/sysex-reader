
"use strict";
import {HUNDRED} from "./data-types.js";

const FREQ = {
    name: "Freq",
    byteLength: 1,
    values: HUNDRED
};

const LEVEL = {
    name: "Level",
    byteLength: 1,
    value: HUNDRED
};

const PEAK = {
    name: "Peak",
    byteLength: 1,
    values: HUNDRED
};

const WAH_BASIC_MAP = [
    FREQ,
    LEVEL
];

const WAH_MAP = [
    FREQ, 
    PEAK,
    LEVEL
];

const AUTO_WAH_MAP = [{
        name: "Sens",
        byteLength: 1, 
        values: HUNDRED
    },
    FREQ,
    PEAK,
    {
        name: "Rate",
        byteLength: 1,
        values: HUNDRED
    }, {
        name: "Depth",
        byteLength: 1, 
        values: HUNDRED
    },
    LEVEL
];

export {
    WAH_BASIC_MAP,
    WAH_MAP,
    AUTO_WAH_MAP
};
