"use strict";

import {TOGGLE, HUNDRED} from "./data-types.js";

const FEEDBACK_MAP = [{
	name: "Trigger",
	byteLength: 1,
	values: TOGGLE
}, {
	name: "Vib Rate",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Vib Depth",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Rise Time 1",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "F.B. Level 1",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "Rise Time 2",
	byteLength: 1,
	values: HUNDRED
}, {
	name: "F.B. Level 2",
	byteLength: 1,
	values: HUNDRED
}];

export {
	FEEDBACK_MAP
};
