"use strict";
import {TYPES, ALGORITHM_NAME} from "./data-types.js";
import {MASTER_MAP} from "./master-map.js"
import {SEND_RETURN_MAP} from "./send-return-map.js";
import {COMPRESSOR_BASIC_MAP} from "./compressor-basic-map.js";
import {SPEAKER_SIMULATOR_MAP} from "./speaker-simulator-map.js";
import {FOOT_VOLUME_MAP, FOOT_VOLUME_NAMES} from "./foot-volume-map.js";
import {EQ_MAP} from "./eq-map.js";
import {NOISE_SUPPRESSOR_MAP} from "./noise-suppressor-map.js";
import {PREAMP_PATCH_MAP} from "./preamp-map.js";
import {REVERB_CONNECT_MAP} from "./reverb-connect-map.js";
import {WAH_BASIC_MAP} from "./wah-map.js";

import {REVERB_BASIC_MAP} from "./reverb-map.js";
import {HARMONIZER_BASIC_MAP} from "./harmonizer-basic-map.js";
import {DELAY_BASIC_MAP} from "./delay-basic-map.js";
import {CHORUS_BASIC_MAP} from "./chorus-map.js";

/*

OFFSETS for BASIC algorithm:
ORDER: 0x0001,
REVERB_CONNECT: 0x001B,
TOGGLE: 0x001C,
CS: 0x0020;
WAH: 0x0024
S/R: 0x0026,
PRE: 0x002A,
SPS: 0x0034,
EQ: 0x0038,
NS: 0x003F,
HR: 0x0042,
FV: 0x004A,
DD: 0x004B,
CE: 0x0052,
RV: 0x0056,
MASTER: 0x0136,
ASSIGN: 0x013A
NAME: 0x020A

*/


const CS = {
	name: "Compressor",
	short_name: "CS",
	key: "compressor",
	order_id: 0x00,
	offset: 0x0020,
	toggle_mask: 0b01000000000000000000000000000000,
	map: COMPRESSOR_BASIC_MAP
};

const WAH = {
	name: "Wah Pedal",
	short_name: "WAH",
	key: "wah",
	order_id: 0x01,
	offset: 0x0024,
	toggle_mask: 0b00100000000000000000000000000000,
	map: WAH_BASIC_MAP
};

const SR = {
	name: "Send/Return",
	short_name: "S/R",
	key: "send_return",
	order_id: 0x02,
	offset: 0x0026,
	toggle_mask: 0b00010000000000000000000000000000,
	map: SEND_RETURN_MAP
};

const PRE = {
	name: "Preamp",
	short_name: "PRE",
	key: "preamp",
	order_id: 0x03,
	offset: 0x002A,
	toggle_mask: 0b00001000000000000000000000000000,
	map: PREAMP_PATCH_MAP
};

const SPS = {
	name: "Speaker Simulator",
	short_name: "SPS",
	key: "speaker_simulator",
	order_id: 0x04,
	offset: 0x0034,
	toggle_mask: 0b00000100000000000000000000000000,
	map: SPEAKER_SIMULATOR_MAP
};

const EQ = {
	name: "Equalizer",
	short_name: "EQ",
	key: "eq",
	order_id: 0x05,
	offset: 0x0038,
	toggle_mask: 0b00000010000000000000000000000000,
	map: EQ_MAP
};

const NS = {
	name: "Noise Suppressor",
	short_name: "NS",
	key: "noise_suppressor",
	order_id: 0x06,
	offset: 0x003F,
	toggle_mask: 0b00000001000000000000000000000000,
	map: NOISE_SUPPRESSOR_MAP
};

const HR = {
	name: "Harmonizer",
	short_name: "HR",
	key: "harmonizer",
	order_id: 0x07,
	offset: 0x0042,
	toggle_mask: 0b00000000010000000000000000000000,
    map: HARMONIZER_BASIC_MAP
};

const FV = {
	...FOOT_VOLUME_NAMES,
	order_id: 0x08,
	offset: 0x004A,
	toggle_mask: 0b00000000001000000000000000000000,
	map: FOOT_VOLUME_MAP
};

const DD = {
	name: "Delay",
	short_name: "DD",
	key: "delay",
	order_id: 0x09,
	offset: 0x004B,
	toggle_mask: 0b00000000000100000000000000000000,
	map: DELAY_BASIC_MAP
};

const CE = {
	name: "Chorus",
	short_name: "CE",
	key: "chorus",
	order_id: 0x0A,
	offset: 0x0052,
	toggle_mask: 0b00000000000010000000000000000000,
	map: CHORUS_BASIC_MAP
};

const RV = {
	name: "Reverb",
	short_name: "RV",
	key: "reverb",
	order_id: 0x0B,
	offset: 0x0056,
	toggle_mask: 0b00000000000001000000000000000000,
	map: REVERB_BASIC_MAP
};

const EFFECTS = [
    CS,
    WAH,
    SR,
    PRE,
    SPS,
    EQ,
    NS,
    HR,
    FV,
    DD,
    CE,
    RV
];

const byteLengthReducer = (sum, mapItem) => {
	const {byteLength = 0, map = []} = mapItem;
	if (byteLength !== 0) {
		return sum + byteLength;
	}
	return sum + getByteLength(map);
};

const getByteLength = (map) => map.reduce(byteLengthReducer, 0);

const getNestedMap = (modules = [], name = null, key = null) => {
	const values = [];
	const result = {
		type: TYPES.NESTED,
		name,
		key,
		values
	};

	if (name !== null) {
		result.name = name;
	}
	if (key !== null) {
		result.key = key;
	}
	let byteLength = 0;

	modules.forEach(module => {
		const {name, key, map, offset = null} = module;
		const bl = getByteLength(map)
		const moduleResult = {
			name,
			key,
			byteLength: bl
		};

		if (offset !== null) {
			moduleResult.offset = offset;
		}

		byteLength += bl;
		values.push(moduleResult);
	});

	result.byteLength = byteLength;
	return result;
}

const ALGORITHM_BASIC_EFFECTS_ORDER = {
	type: TYPES.EFFECTS_ORDER,
	values: EFFECTS
};

const ALGORITHM_BASIC_EFFECTS_TOGGLE = {
	type: TYPES.EFFECTS_TOGGLE,
	values: EFFECTS
};


const REVERB_CONNECT = {
	offset: [0x00, 0x1B],
	map: REVERB_CONNECT_MAP
};

const MASTER = {
	offset: [0x01, 0x36],
	map: MASTER_MAP
};

const ALGORITHM_BASIC_MAP = [{
		name: "Algorithm",
		key: "algorithm",
		byteLength: 1,
		values: ALGORITHM_NAME
	}, {
		name: "Effects Order",
		key: "order",
		byteLength: 12,
		values: ALGORITHM_BASIC_EFFECTS_ORDER
	}, 
    ({...REVERB_CONNECT.map[0], offset: REVERB_CONNECT.offset}),
    {
    	name: "Effects Toggle",
    	key: "toggle",
    	byteLength: 4,
    	values: ALGORITHM_BASIC_EFFECTS_TOGGLE
    },
    getNestedMap(EFFECTS),
    {
    	offset: [0x02, 0x0A],
    	name: "Name",
    	key: "name",
    	byteLength: 16
    }
];

console.log(ALGORITHM_BASIC_MAP);

export {
	ALGORITHM_BASIC_MAP
};
