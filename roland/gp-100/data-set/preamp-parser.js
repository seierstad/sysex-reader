"use strict";
import {PREAMP_PATCH_MAP} from "../address-maps/preamp-map.js"; 


const preampParser = (data, offset = 0) => {
	const result = {};
	data.forEach((byte, index) => {
		const property = PREAMP_PATCH_MAP[offset + index];
		result[property.key] = {
			data: byte,
			value: getValue(property.values, byte),
			name: property.name
		};

	return result;
};

export {
    preampParser
};
