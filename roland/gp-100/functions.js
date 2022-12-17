"use strict";

const byteLengthReducer = (acc, curr, index, map) => {
	if (curr.byteLength) {
	    return acc + curr.byteLength;
	}

	return acc + curr.reduce(byteLengthReducer, 0);
};

export {
    byteLengthReducer
};

