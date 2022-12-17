"use strict";
import {HUNDRED, TOGGLE, TYPE} from "./data-types.js";

const DELAY_MODES = {
	type: TYPE.ENUM,
	values: {
		0x00: "Normal Dly",
		0x01: "Tempo Dly"
	}
};

const DELAY_TIMES = {
	type: TYPE.MAPPED_RANGE,
	values: {
		min: 0,
		max: 2000,
		unit: "ms",
		step: 1
	},
	data: {
		min: [0x00, 0x00],
		max: [0x0F, 0x50]
	}
};

const DELAY_INTERVALS = {
	type: TYPE.ENUM,
	values: {
		0x00: "1/4",
		0x01: "1/3",
		0x02: "3/8",
		0x03: "1/2",
		0x04: "2/3",
		0x05: "3/4",
		0x06: "1.0",
		0x07: "1.5",
		0x08: "2.0",
		0x09: "3.0",
		0x0A: "4.0"
	}
};

const DELAY_LEVELS = {
	type: TYPE.RANGE,
	values: {
		min: 0,
		max: 120
	}
};

const DELAY_MINIMAL_MAP = [{
    name: "Mode",
    byteLength: 1,
    values: DELAY_MODES
}, {
	name: "DlyTime",
	byteLength: 2,
	values: DELAY_TIMES
}, {
	name: "Interval",
	byteLength: 1, 
	values: DELAY_INTERVALS
}, {
	name: "Feedback",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Effect Level",
	byteLength: 1,
	values: DELAY_LEVELS
}];

const DELAY_BASIC_MAP = [
	...DELAY_MINIMAL_MAP,
	{
		name: "Tap",
		byteLength: 1,
		values: TOGGLE
	}
];

export {
	DELAY_MINIMAL_MAP,
    DELAY_BASIC_MAP,
    DELAY_MODES,
    DELAY_INTERVALS
};
