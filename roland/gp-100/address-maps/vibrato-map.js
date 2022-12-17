"use strict";

import {TOGGLE, HUNDRED} from "./data-types.js";


const VIBRATO_MAP = [{
    name: "Trigger",
    byteLength: 1,
    values: TOGGLE
}, {
    name: "Rise Time",
    byteLength: 1,
    values: HUNDRED
}, {
    name: "Rate",
    byteLength: 1,
    values: HUNDRED
}, {
    name: "Depth",
    byteLength: 1,
    values: HUNDRED
}];

export {
    VIBRATO_MAP
};
