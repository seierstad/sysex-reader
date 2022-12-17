"use strict";
import {PERCENTAGE, TOGGLE, TYPE} from "./data-types.js";

const NAME_OFFSET = 0x020A;

const LPF_FREQUENCIES = {
    0x00: "500Hz",
    0x01: "630Hz",
    0x02: "800Hz",
    0x03: "1.00kHz",
    0x04: "1.25kHz",
    0x05: "1.60kHz",
    0x06: "2.00kHz",
    0x07: "2.50kHz",
    0x08: "3.15kHz",
    0x09: "4.00kHz",
    0x0A: "5.00kHz",
    0x0B: "6.30kHz",
    0x0C: "8.00kHz",
    0x0D: "10.0kHz",
    0x0E: "12.5kHz",
    0x0F: "Thru"
};


export {
    NAME_OFFSET,
    LPF_FREQUENCIES
};
