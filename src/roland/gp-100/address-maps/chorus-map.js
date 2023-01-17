"use strict";

import {HUNDRED, PERCENTAGE, LPF, TYPES, MONO_STEREO} from "./data-types.js";

const CE_PRE_DELAY = {
    type: TYPES.MAPPED_RANGE,
    values: {
        min: 0,
        max: 50,
        step: 0.5,
        unit: "ms"
    },
    data: {
        min: 0x00,
        max: 0x64
    }
};

const MODE = {
    name: "Mode",
    byteLength: 1, 
    values: MONO_STEREO
};

const RATE = {
    name: "Rate",
    byteLength: 1,
    values: HUNDRED
};

const DEPTH = {
    name: "Depth",
    byteLength: 1,
    values: HUNDRED
};

const EFFECT_LEVEL = {
    name: "Effect Level",
    byteLength: 1,
    values: HUNDRED
};


const CHORUS_MINIMAL_MAP = [
    RATE,
    DEPTH
];

const CHORUS_BASIC_MAP = [
    MODE,
    RATE,
    DEPTH,
    EFFECT_LEVEL
];

const CHORUSE_DUAL_MAP = [
    RATE,
    DEPTH,
    EFFECT_LEVEL
];


const CHORUS_MAP = [
    MODE,
    RATE,
    DEPTH,
    {
        name: "Pre Delay",
        mapaddress: "predelay",
        byteLength: 1,
        values: CE_PRE_DELAY
    }, {
        name: "LPF",
        mapaddress: "lpf",
        byteLength: 1,
        values: LPF
    },
    EFFECT_LEVEL
];


export {
    CHORUS_BASIC_MAP,
    CHORUS_MINIMAL_MAP,
    CHORUSE_DUAL_MAP,
    CHORUS_MAP
};
