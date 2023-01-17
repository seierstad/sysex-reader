"use strict";
import {HUNDRED, TYPE, ENUM} from "./data-types.js";

const PHASER_MODES = {
	type: TYPE.ENUM,
	values: {
		0x00: "4 Stage",
		0x01: "8 Stage"
	}
};


const PHASER_MAP = [{
	name: "Mode",
    byteLength: 1,
    values: PHASER_MODES
}, {
	name: "Rate",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Depth",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Manual",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Resonance",
	byteLength: 1,
	values: HUNDRED
}];

export {
	PHASER_MAP
};
