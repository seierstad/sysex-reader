"use strict";

import {PERCENTAGE, LPF as LPFS, TYPE} from "./data-types.js";

const REVERB_MODES = {
	type: TYPE.ENUM,
	values: {
		0x00: "Room 1",
		0x01: "Room 2",
		0x02: "Hall 1",
		0x03: "Hall 2",
		0x04: "Plate"
	}
};

const REVERB_TIMES = {
	type: TYPE.MAPPED_RANGE,
	values: {
		min: 0.0,
		max: 10.0,
		unit: "s",
		step: 0.1
	},
	data: {
		min: 0x00,
		max: 0x63
	}
};

const REVERB_PREDELAYS = {
	type: TYPE.MAPPED_RANGE,
	values: {
		min: 0,
		max: 100,
		step: 1,
		unit: "ms"
	},
	data: {
		min: 0x00,
		max: 0x64
	}
};

const HPF_FREQUENCIES = {
	0x00: "55.0Hz",
	0x01: "110Hz",
	0x02: "165Hz",
	0x03: "200Hz",
	0x04: "280Hz",
	0x05: "340Hz",
	0x06: "400Hz",
	0x07: "500Hz",
	0x08: "630Hz",
	0x09: "800Hz"
};

const HPFS = {
	type: TYPE.ENUM,
	values: HPF_FREQUENCIES
};


const MODE = {
	name: "Mode",
	byteLength: 1,
	values: REVERB_MODES
};

const REV_TIME = {
	name: "Rev Time",
	byteLength: 1,
	values: REVERB_TIMES
};

const DIR_LEVEL = {
	name: "Direct Level",
	byteLength: 1,
	values: PERCENTAGE
};

const EFF_LEVEL = {
	name: "Effect Level",
	byteLength: 1,
	values: PERCENTAGE
};

const LPF = {
	name: "LPF",
	byteLength: 1,
	values: LPFS
};

const HPF = {
	name: "HPF",
	byteLength: 1,
	values: HPFS
};

const PREDELAY = {
	name: "Pre Delay",
	byteLength: 1,
	values: REVERB_PREDELAYS
};

const REVERB_BASIC_MAP = [
	MODE,
	REV_TIME,
	LPF,
	DIR_LEVEL,
	EFF_LEVEL
];

const REVERB_MAP = [
	MODE,
	REV_TIME,
	PREDELAY,
	HPF,
	LPF,
	DIR_LEVEL,
	EFF_LEVEL
];

export {
    REVERB_BASIC_MAP,
    REVERB_MAP
};
