"use strict";

import {ALGORITHM_NAME} from "./algorithm.js";
import {ALGORITHM_BASIC_MAP} from "../address-maps/index.js"


const parsePatch = (data, offset = [0, 0]) => {
	const result = {};
	if (offset[0] === 0 && offset[1] === 0) {
		result.algorithm = {
			value: ALGORITHM_NAME[data[0]],
			data: data[0]
		};
		debugger;
	}
	return result;
};

export {
    parsePatch
};
