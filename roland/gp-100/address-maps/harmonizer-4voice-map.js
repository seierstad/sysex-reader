"use strict";
import {TYPE, TWENTYFOUR_TWENTYFOUR, FIFTY_FIFTY, PAN} from "./data-types.js";
import {HARMONIZER_SCALES, KEYS, HARMONIES} from "./harmonizer-basic-map.js";


const HARMONIZER_4VOICE_MODES = {
	type: TYPE.ENUM,
	values: {
        0x00: "1",
        0x01: "2",
        0x02: "3",
        0x03: "4",
        0x04: "5",
        0x05: "Mono",
        0x06: "Harmony",
        0x07: "Inv 1",
        0x08: "Inv 2"
	}
};


const HARMONIZER_PREDELAY_TIMES = {
	type: TYPE.MAPPED_RANGE,
	values: {
		min: 0,
		max: 740,
		unit: "ms",
		step: 1
	},
	data: {
		min: [0x00, 0x00],
		max: [0x05, 0x64]
	}
};

const HARMONIZER_4VOICE_MAP = [{
    name: "HR1 Mode",
    byteLength: 1,
    values: HARMONIZER_4VOICE_MODES 
}, {
	name: "HR1 Pitch",
	byteLength: 1, 
	values: TWENTYFOUR_TWENTYFOUR
}, {
	name: "HR1 Fine",
	byteLength: 1, 
	values: FIFTY_FIFTY
}, {
	name: "HR1 Scale",
	byteLength: 1,
	values: HARMONIZER_SCALES 
}, {
	name: "HR1 Harmony",
	byteLenght: 1,
	values: HARMONIES
}, {
	name: "HR1 PreDly",
	byteLength: 2,
	values: HARMONIZER_PREDELAY_TIMES
}, {
	name: "HR1 Pan",
	byteLength: 1,
	values: PAN
}, {
	name: "HR1 Feedback",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "HR1 Level",
	byteLength: 1,
	values: HUNDRED
}, {
    name: "HR2 Mode",
    byteLength: 1,
    values: HARMONIZER_4VOICE_MODES 
}, {
	name: "HR2 Pitch",
	byteLength: 1, 
	values: TWENTYFOUR_TWENTYFOUR
}, {
	name: "HR2 Fine",
	byteLength: 1, 
	values: FIFTY_FIFTY
}, {
	name: "HR2 Scale",
	byteLength: 1,
	values: HARMONIZER_SCALES 
}, {
	name: "HR2 Harmony",
	byteLenght: 1,
	values: HARMONIES
}, {
	name: "HR2 PreDly",
	byteLength: 2,
	values: HARMONIZER_PREDELAY_TIMES
}, {
	name: "HR2 Pan",
	byteLength: 1,
	values: PAN
}, {
	name: "HR2 Feedback",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "HR2 Level",
	byteLength: 1,
	values: HUNDRED
}, {
    name: "HR3 Mode",
    byteLength: 1,
    values: HARMONIZER_4VOICE_MODES 
}, {
	name: "HR3 Pitch",
	byteLength: 1, 
	values: TWENTYFOUR_TWENTYFOUR
}, {
	name: "HR3 Fine",
	byteLength: 1, 
	values: FIFTY_FIFTY
}, {
	name: "HR3 Scale",
	byteLength: 1,
	values: HARMONIZER_SCALES 
}, {
	name: "HR3 Harmony",
	byteLenght: 1,
	values: HARMONIES
}, {
	name: "HR3 PreDly",
	byteLength: 2,
	values: HARMONIZER_PREDELAY_TIMES
}, {
	name: "HR3 Pan",
	byteLength: 1,
	values: PAN
}, {
	name: "HR3 Feedback",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "HR3 Level",
	byteLength: 1,
	values: HUNDRED
}, {
    name: "HR4 Mode",
    byteLength: 1,
    values: HARMONIZER_4VOICE_MODES 
}, {
	name: "HR4 Pitch",
	byteLength: 1, 
	values: TWENTYFOUR_TWENTYFOUR
}, {
	name: "HR4 Fine",
	byteLength: 1, 
	values: FIFTY_FIFTY
}, {
	name: "HR4 Scale",
	byteLength: 1,
	values: HARMONIZER_SCALES 
}, {
	name: "HR4 Harmony",
	byteLenght: 1,
	values: HARMONIES
}, {
	name: "HR4 PreDly",
	byteLength: 2,
	values: HARMONIZER_PREDELAY_TIMES
}, {
	name: "HR4 Pan",
	byteLength: 1,
	values: PAN
}, {
	name: "HR4 Feedback",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "HR4 Level",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Key",
	byteLength: 1,
	values: KEYS
}, {
	name: "DirPan",
	byteLength: 1,
	values: PAN
}, {
	name: "Direct Level",
	byteLength: 1,
	values: HUNDRED
}];

export {
    HARMONIZER_4VOICE_MAP
};
