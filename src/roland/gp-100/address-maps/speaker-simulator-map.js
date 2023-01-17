"use strict";

import {PERCENTAGE, TYPES} from "./data-types.js";


const SPEAKER_SIMULATION_TYPE = {
    type: TYPES.ENUM,
    values: {
        0x00: "Small",
        0x01: "Middle",
        0x02: "JC-120",
        0x03: "Built in 1",
        0x04: "Built in 2",
        0x05: "Built in 3",
        0x06: "Built in 4",
        0x07: "BG Stack 1",
        0x08: "BG Stack 2",
        0x09: "MS Stack 1",
        0x0A: "MS Stack 2",
        0x0B: "Metal Stack"
    }
};

const SPEAKER_SIMULATION_MIC_SETTING = {
	type: TYPES.ENUM,
	values: {
        0x00: 1,
        0x01: 2,
        0x02: 3
    }
};


const SPEAKER_SIMULATOR_MAP = [{
    name: "Type",
    byteLength: 1,
    values: SPEAKER_SIMULATION_TYPE
}, {
	name: "Mic Setting",
	byteLength: 1,
	values: SPEAKER_SIMULATION_MIC_SETTING
}, {
	name: "Mic Level",
	byteLength: 1,
	values: PERCENTAGE
}, {
	name: "Direct Level",
	byteLength: 1,
	values: PERCENTAGE
}];

export {
    SPEAKER_SIMULATOR_MAP
};
