"use strict";

import {TYPE, HUNDRED, FIFTY_FIFTY} from "./data-types.js";

const MODES = {
	type: TYPE.ENUM,
	values: {
		0x00: "Limiter",
		0x01: "Compressor"
	}
};

const COMPRESSOR_LIMITER_MAP = [{
	name: "Mode",
	byteLength: 1,
	values: MODES
}, {
	name: "Threshold",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Release",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "LM Level",
	byteLength: 1, 
	values: HUNDRED
}, {
	name: "Sustain",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Attack",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "CS Level",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Tone",
	byteLength: 1,
	values: FIFTY_FIFTY
}];

export {
    COMPRESSOR_MAP
};
