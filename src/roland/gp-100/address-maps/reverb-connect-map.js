"use strict";
import {TYPES} from "./data-types.js";


const REVERB_CONNECT = {
    type: TYPES.ENUM,
    values: {
        0x00: "Parallel",
        0x01: "Serial"
    }
};

const REVERB_CONNECT_MAP = [{
	name: "Reverb Connect",
    key: "reverb_connect",
	byteLength: 1,
	values: REVERB_CONNECT
}];

export {
    REVERB_CONNECT_MAP
};
