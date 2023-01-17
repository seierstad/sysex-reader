"use strict";
import {HUNDRED, LPF, PAN, TYPE} from "./data-types.js";
import {DELAY_MODES, DELAY_INTERVALS, DELAY_LEVELS} from "./delay-basic-map.js";


const DELAY_TIMES = {
	type: TYPE.MAPPED_RANGE,
	values: {
		min: 0,
		max: 4800,
		unit: "ms",
		step: 1
	},
	data: {
		min: [0x00, 0x00],
		max: [0x25, 0x40]
	}
};


const DELAY_4TAP_MAP = [{
    name: "Mode",
    byteLength: 1,
    values: DELAY_MODES
}, {
	name: "DlyTime 1",
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
	name: "Pan 1",
	byteLength: 1,
	values: PAN
}, {
	name: "Level 1",
	byteLength: 1,
	values: DELAY_LEVELS
}, {
	name: "DlyTime 2",
	byteLength: 1, 
	values: PERCENTAGE
}, {
	name: "Pan 2",
	byteLength: 1, 
	values: PAN
}, {
	name: "Level 2",
	byteLength: 1, 
	values: DELAY_LEVELS
}, {
	name: "DlyTime 3",
	byteLength: 1, 
	values: PERCENTAGE
}, {
	name: "Pan 3",
	byteLength: 1, 
	values: PAN
}, {
	name: "Level 3",
	byteLength: 1, 
	values: DELAY_LEVELS
}, {
	name: "DlyTime 4",
	byteLength: 1, 
	values: PERCENTAGE
}, {
	name: "Pan 4",
	byteLength: 1, 
	values: PAN
}, {
	name: "Level 4",
	byteLength: 1, 
	values: DELAY_LEVELS
}, {
	name: "LPF",
	byteLength: 1, 
	values: LPF
}, {
	name: "DirPan",
	byteLength: 1,
	values: PAN
}, {
	name: "Direct Level",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Ducking",
	byteLength: 1,
	values: TOGGLE
}, {
	name: "Duck Sens",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Duck Depth",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "DuckRiseTime",
	byteLength: 1,
	values: HUNDRED
}];


export {
	DELAY_4TAP_MAP
};
