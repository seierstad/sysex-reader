"use strict";
import {TYPE, FIFTY_FIFTY, TWENTYFOUR_TWENTYFOUR, HUNDRED} from "./data-types.js";

const HARMONIZER_MODES = {
	type: TYPE.ENUM,
	values: {
		0x00: "1",
		0x01: "2",
		0x02: "3",
		0x03: "4",
		0x04: "5",
		0x05: "Mono",
		0x06: "Harmony"
	}
};

const HARMONIZER_SCALE = {
	type: TYPE.ENUM,
	values: {
		0x00: "Preset",
		0x01: "User"
	}
};

const HARMONIES = {
	type: TYPE.ENUM,
	values: {
		0x00: "-2oct",
		0x01: "-14th",
		0x02: "-13th",
		0x03: "-12th",
		0x04: "-11th",
		0x05: "-10th",
		0x06: "-9th",
		0x07: "-1oct",
		0x08: "-7th",
		0x09: "-6th",
		0x0A: "-5th",
		0x0B: "-4th",
		0x0C: "-3rd",
		0x0D: "-2nd",
		0x0E: "Tonic",
		0x0F: "+2nd",
		0x10: "+3rd",
		0x11: "+4th",
		0x12: "+5th",
		0x13: "+6th",
		0x14: "+7th",
		0x15: "+1oct",
		0x16: "+9th",
		0x17: "+10th",
		0x18: "+11th",
		0x19: "+12th",
		0x1A: "+13th",
		0x1B: "+14th",
		0x1C: "+2oct"
	}
};

const KEYS = {
	type: TYPE.ENUM,
	values: {
		0x00: "C (Am)",
		0x01: "Db (Bbm)",
		0x02: "D (Bm)",
		0x03: "Eb (Cm)",
		0x04: "E (C#m)",
		0x05: "F (Dm)",
		0x06: "Gb (D#m)",
		0x07: "G (Em)",
		0x08: "Ab (Fm)",
		0x09: "A (F#m)",
		0x0A: "Bb (Gm)",
		0x0B: "B (G#m)"
	}
};

const HARMONIZER_BASIC_MAP = [{
    name: "Mode",
    byteLength: 1,
    values: HARMONIZER_MODES
}, {
    name: "Pitch",
    byteLength: 1,
    values: TWENTYFOUR_TWENTYFOUR
}, {
	name: "Fine",
	byteLength: 1,
	values: FIFTY_FIFTY
}, {
	name: "Scale",
	byteLength: 1,
	values: HARMONIZER_SCALE
}, {
	name: "Harmony",
	byteLength: 1,
	values: HARMONIES
}, {
	name: "Key",
	byteLength: 1,
	values: KEYS
}, {
	name: "Direct Level",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Effect Level",
	byteLength: 1,
	values: HUNDRED
}];

export {
    HARMONIZER_BASIC_MAP,
    HARMONIZER_SCALES,
    KEYS,
    HARMONIES
};
