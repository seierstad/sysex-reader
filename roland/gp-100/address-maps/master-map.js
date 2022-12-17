"use strict";

const OUTPUT_CHANNEL = {
    type: TYPE.ENUM,
    values: {
        0x00: "OUTPUT A",
        0x01: "OUTPUT B",
        0x02: "OUTPUT A, B"
    }
};

const MASTER_MAP = [{
    name: "Master Level",
    byteLength: 1,
    values: PERCENTAGE
}, {
    name: "OUTPUT Channel",
    byteLength: 1,
    values: OUTPUT_CHANNEL
}, {
    name: "EXT CTL 1",
    byteLength: 1,
    values: TOGGLE
}, {
    name: "EXT CTL 2",
    byteLength: 1,
    values: TOGGLE
}];


export {
    MASTER_MAP
};
