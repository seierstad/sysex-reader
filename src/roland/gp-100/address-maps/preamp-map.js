"use strict";
import {PERCENTAGE, TYPES} from "./data-types.js";

const PREAMP_TYPE_NAMES = {
    type: TYPES.ENUM,
    values: {
        0x00: "JC-120",
        0x01: "Clean Twin",
        0x02: "Match Drive",
        0x03: "BG Lead",
        0x04: "MS1959(1)",
        0x05: "MS1959(2)",
        0x06: "MS1959(1&2)",
        0x07: "SLDN Lead",
        0x08: "Metal 5150",
        0x09: "Metal Lead",
        0x0A: "OD-1",
        0x0B: "OD-2 Turbo",
        0x0C: "Distortion",
        0x0D: "Fuzz"
    }
};

const PREAMP_BRIGHT = {
    type: TYPES.ENUM,
    values: {
        0x00: "Off",
        0x01: "On"
    }
};

const PREAMP_GAIN = {
    type: TYPES.ENUM,
    values: {
        0x00: "Low",
        0x01: "Mid",
        0x02: "High"
    }
};

const PREAMP_MODE = {
    type: TYPES.ENUM,
    values: {
        0x00: "Patch",
        0x01: "Setting[1]",
        0x02: "Setting[2]",
        0x03: "Setting[3]",
        0x04: "Setting[4]"
    }
};


const PREAMP_MAP = [{
    name: "Type",
    key: "type",
    byteLength: 1,
    values: PREAMP_TYPE_NAMES
}, {
    name: "Volume",
    key: "volume",
    byteLength: 1,
    values: PERCENTAGE
}, {
    name: "Bass",
    key: "bass",
    byteLength: 1,
    values: PERCENTAGE
}, {
    name: "Middle",
    key: "middle",
    byteLength: 1,
    values: PERCENTAGE
}, {
    name: "Treble",
    key: "treble",
    byteLength: 1,
    values: PERCENTAGE
}, {
    name: "Presence",
    key: "treble",
    byteLength: 1,
    values: PERCENTAGE
}, {
    name: "Master",
    key: "master",
    byteLength: 1,
    values: PERCENTAGE
}, {
    name: "Bright",
    key: "bright",
    byteLength: 1,
    values: PREAMP_BRIGHT
}, {
    name: "Gain",
    key: "gain",
    byteLength: 1,
    values: PREAMP_GAIN
}];


const PREAMP_PATCH_MAP = [
    {
        name: "Mode",
        key: "mode",
        byteLength: 1,
        values: PREAMP_MODE
    },
    ...PREAMP_MAP
];

export {
    PREAMP_MAP,
    PREAMP_PATCH_MAP
};
