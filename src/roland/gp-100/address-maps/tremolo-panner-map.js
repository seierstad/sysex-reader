"use strict";

import {TYPE, PAN, HUNDRED} from "./data-types.js";

const MODES = {
	type: TYPE.ENUM,
	values: {
		0x00: "Tremolo",
		0x01: "Pan"
	}
};

const MOD_WAVES = {
	type: TYPE.ENUM,
	values: {
		0x00: "Square",
		0x01: "Tri"
	}
};

const TREMOLO_PANNER_MAP = [{
	name: "Mode",
	byteLength: 1,
	values: MODES
}, {
	name: "Mod Wave",
	byteLength: 1,
	values: MOD_WAVES
}, {
	name: "Rate",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Depth",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Bal",
	byteLength: 1, 
	values: PAN
}];

export {
	TREMOLO_PANNER_MAP
};
