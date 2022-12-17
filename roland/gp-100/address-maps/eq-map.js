"use strict";
import {TYPE} from "./data-types.js";

const EQ_MID_FREQUENCY = {
    type: TYPE.ENUM,
    values: {
        0x00: "100Hz",
        0x01: "125Hz",
        0x02: "160Hz",
        0x03: "200Hz",
        0x04: "250Hz",
        0x05: "315Hz",
        0x06: "400Hz",
        0x07: "500Hz",
        0x08: "630Hz",
        0x09: "800Hz",
        0x0A: "1.00kHz",
        0x0B: "1.25kHz",
        0x0C: "1.60kHz",
        0x0D: "2.00kHz",
        0x0E: "2.50kHz",
        0x0F: "3.15kHz",
        0x10: "4.00kHz",
        0x11: "5.00kHz",
        0x12: "6.30kHz",
        0x13: "8.00kHz",
        0x14: "10.0kHz"
    }
};

const EQ_Q = {
    type: TYPE.ENUM,
    values: {
        0x00: 0.5,
        0x01: 1,
        0x02: 2,
        0x03: 4,
        0x04: 8,
        0x05: 16
    }
};

const EQ_DB = {
    type: TYPE.MAPPED_RANGE,
    values: {
        min: -20,
        max: 20,
        step: 1,
        unit: "dB"
    },
    data: {
        min: 0x00,
        max: 0x28
    }
};

const EQ_MAP = [{
    name: "Low EQ",
    byteLength: 1,
    values: EQ_DB
}, {
    name: "Lo-Mid f",
    byteLength: 1,
    values: EQ_MID_FREQUENCY
}, {
    name: "Lo-Mid Q",
    byteLength: 1,
    values: EQ_Q
}, {
    name: "Lo-Mid EQ",
    byteLength: 1,
    values: EQ_DB
}, {
    name: "Hi-Mid f",
    byteLength: 1,
    values: EQ_MID_FREQUENCY
}, {
    name: "Hi-Mid Q",
    byteLength: 1,
    values: EQ_Q
}, {
    name: "Hi-Mid EQ",
    byteLength: 1,
    values: EQ_DB
}, {
    name: "High EQ",
    byteLength: 1,
    values: EQ_DB
}];

export {
    EQ_MAP
};
