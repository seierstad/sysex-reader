"use strict";
import {LPF_FREQUENCIES} from "./common.js";


const TYPES = {
    ENUM: Symbol("ENUM"),
    RANGE: Symbol("RANGE"),
    MAPPED_RANGE: Symbol("MAPPED_RANGE"),
    SPLIT: Symbol("SPLIT"),
    UNUSED: Symbol("UNUSED")
};

const UNUSED = {
    type: TYPE.UNUSED
};

const TOGGLE = {
    type: TYPES.ENUM,
    values: {
        0x00: "Off",
        0x01: "On"
    }
};

const HUNDRED = {
    type: TYPES.RANGE,
    values: {
        min: 0,
        max: 100,
        step: 1
    }
};

const HUNDRED27 = {
    type: TYPES.RANGE,
    values: {
        min: 0,
        max: 127,
        step: 1
    }
};

const PERCENTAGE = {
    type: TYPES.RANGE,
    values: {
        min: 0,
        max: 100,
        step: 1
    },
    unit: "%"
};

const FIFTY_FIFTY = {
    type: TYPES.MAPPED_RANGE,
    values: {
        min: -50,
        max: 50,
        default: 0,
        step: 1
    },
    data: {
        min: 0x00,
        max: 0x64
    }
};

const TWENTYFOUR_TWENTYFOUR = {
    type: TYPES.MAPPED_RANGE,
    values: {
        min: -24,
        max: 24,
        default: 0,
        step: 1
    },
    data: {
        min: 0x00,
        max: 0x30
    }
};

const MONO_STEREO = {
    type: TYPE.ENUM,
    values: {
        0x00: "Mono",
        0x01: "Stereo"
    }
};

const LPF = {
    type: TYPES.ENUM,
    values: LPF_FREQUENCIES
};

const PAN = {
    type: TYPE.SPLIT,
    values: {
        min: [100, 0],
        max: [0, 100],
        units: ["L", "R"],
        step: 2
    }, 
    data: {
        min: 0x00,
        max: 0x64
    }
};

export {
    TYPES,
    TOGGLE,
    PERCENTAGE,
    FIFTY_FIFTY,
    TWENTYFOUR_TWENTYFOUR,
    MONO_STEREO,
    LPF,
    PAN
};
