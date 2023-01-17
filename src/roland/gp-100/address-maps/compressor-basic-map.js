"use strict";

import {HUNDRED, FIFTY_FIFTY} from "./data-types.js";

const COMPRESSOR_BASIC_MAP = [{
	name: "Sustain",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Attack",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Tone",
	byteLength: 1,
	values: FIFTY_FIFTY
}, {
	name: "Level",
	byteLength: 1,
	values: HUNDRED
}];

export {
    COMPRESSOR_BASIC_MAP
};
