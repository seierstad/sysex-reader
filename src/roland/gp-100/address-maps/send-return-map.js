"use strict";
import {HUNDRED, TYPES} from "./data-types.js";

const SEND_RETURN_MODES = {
    type: TYPES.ENUM,
    values: {
        0x00: "Normal",
        0x01: "Direct Mix",
        0x02: "Branch"
    }
};

const SEND_RETURN_TYPES = {
    type: TYPES.ENUM,
    values: {
        0x00: "Stereo",
        0x01: "S/R1 -> S/R2",
        0x02: "S/R1 & S/R2"
    }
};

const SEND_RETURN_SELECTS = {
	type: TYPES.ENUM,
	values: {
		0x00: "S/R1",
		0x01: "S/R2",
		0x02: "S/R1,2"
	}
};

const SEND_RETURN_MAP = [{
    name: "Mode",
    byteLength: 1,
    values: SEND_RETURN_MODES
}, {
	name: "Type",
	byteLength: 1,
	values: SEND_RETURN_TYPES
}, {
	name: "Select",
	byteLength: 1,
	values: SEND_RETURN_SELECTS
}, {
	name: "Send Level",
	byteLength: 1,
	values: HUNDRED
}];

export {
    SEND_RETURN_MAP
};
