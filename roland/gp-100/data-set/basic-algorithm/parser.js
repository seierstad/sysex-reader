"use strict";







const map = [
    ...REVERB_CONNECT,
	...EFFECTS,
	...MASTER,
	...ASSIGN_1,
	...ASSIGN_2_9,
	...ASSIGN_10_16
];

const BASIC_MAP = [{
	name: "Algorithm",
	byteLength: 1,
	values: [0x00]
}, {
    name: "Effect Order",
    byteLength: 12,
    values: MODULES
}, {
    name: "Reverb Connect",
    byteLength: 1,
    values: REVERB_CONNECT
}, {
    name: "Effect On/Off",
    byteLength: 4,
    values: EFFECT_SWITCH_MAP
}, {
	name: "Effects",
	byteLength: 
}];

const addressResolver = (address) => {
	for ()
};

const basicParser = (data, offset) => {
	data.map((byte, index) => {
		return {
			addressResolver(offset + index)
		}
	});
};

