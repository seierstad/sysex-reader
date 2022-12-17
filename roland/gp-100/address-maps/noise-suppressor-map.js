"use strict";
import {HUNDRED, TYPE} from "./data-types.js";

const ENV_INPUT_VALUES = {
    type: TYPE.ENUM,
    values: {
        0x00: "Guitar",
        0x01: "NS"
    }
};

const NOISE_SUPPRESSOR_MAP = [{
    name: "Threshold",
    byteLength: 1,
    values: HUNDRED
}, {
    name: "Release",
    byteLength: 1,
    values: HUNDRED
}, {
    name: "Env. Input",
    byteLength: 1,
    values: ENV_INPUT_VALUES
}];

export {
    NOISE_SUPPRESSOR_MAP
};
