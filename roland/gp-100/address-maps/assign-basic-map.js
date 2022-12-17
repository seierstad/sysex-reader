"use strict";

import {TYPE, HUNDRED} from "./data-types.js";
import {ASSIGN_MODES, ASSIGN_1_MAP, ASSIGN_SOURCES} from "./assign-common.js";


const ASSIGN_1_TARGETS = {
    type: TYPE.ENUM,
    values: {
        0x00: "Not Assign",
        0x01: "WAH: Freq",
        0x02: "FV: Level",
        0x03: "Master Level"
    }
};

const ASSIGN_1_MAP = [{
    name: "Target",
    byteLength: 1,
    values: ASSIGN_1_TARGETS
}, {
    name: "Min",
    byteLength: 1,
    values: HUNDRED
}, {
    name: "Max",
    byteLength: 1,
    values: HUNDRED
}, {
    name: "Source",
    byteLength: 1,
    values: ASSIGN_SOURCE
}, {
    name: "Mode",
    byteLength: 1,
    values: ASSIGN_MODES
}, {
    name: "Act.Range Lo",
    byteLength: 1,
    values: HUNDRED27
}, {
    name: "Act.Range Hi",
    byteLength: 1,
    values: HUNDRED27
}];



const ASSIGN_2_8_TARGETS = {
    type: TYPE.ENUM,
    values: {
        0x00: "Not Assign",
        0x01: "CS: On/Off",
        0x02: "CS: Level",
        0x03: "WAH: On/Off",
        0x04: "WAH: Freq",
        0x05: "WAH: Level",
        0x06: "S/R: On/Off",
        0x07: "S/R: Select",
        0x08: "S/R: Send Level",
        0x09: "PRE: On/Off",
        0x0A: "PRE: Mode",
        0x0B: "PRE: Type",
        0x0C: "PRE: Volume",
        0x0D: "PRE: Bass",
        0x0E: "PRE: Middle",
        0x0F: "PRE: Treble",
        0x10: "PRE: Presence",
        0x11: "PRE: Master",
        0x12: "PRE: Bright",
        0x13: "PRE: Gain",
        0x14: "SPS: On/Off",
        0x15: "SPS: Type",
        0x16: "EQ: On/Off",
        0x17: "EQ: Low EQ",
        0x18: "EQ: Lo-Mid EQ",
        0x19: "EQ: Hi-Mid EQ",
        0x1A: "EQ: High EQ",
        0x1B: "EQ: Level",
        0x1C: "NS: On/Off",
        0x1D: "HR: On/Off",
        0x1E: "HR: Pitch",
        0x1F: "HR: Harmony",
        0x20: "HR: Key",
        0x21: "HR: D.Level",
        0x22: "HR: E.Level",
        0x23: "FV: Level",
        0x24: "DD: On/Off",
        0x25: "DD: Tempo",
        0x26: "DD: Feedback",
        0x27: "DD: E.Level",
        0x28: "CE: On/Off",
        0x29: "CE: Rate",
        0x2A: "CE: Depth",
        0x2B: "CE: E.Level",
        0x2C: "RV: On/Off",
        0x2D: "RV: Rev Time",
        0x2E: "RV: D.Level",
        0x2F: "RV: E.Level",
        0x30: "Master Level",
        0x31: "Output Channel",
        0x32: "EXT CTL 1",
        0x33: "EXT CTL 2",
        0x34: "EFFECT On/Off",
        0x35: "TUNER On/Off"
    }
};

const ASSIGN_9_16_TARGETS = {
    type: TYPE.ENUM,
    values: {
        0x00: "Not Assign",
        0x01: "CS: On/Off",
        0x02: "WAH: On/Off",
        0x03: "S/R: On/Off",
        0x04: "PRE: On/Off",
        0x05: "SPS: On/Off",
        0x06: "EQ: On/Off",
        0x07: "NS: On/Off",
        0x08: "HR: On/Off",
        0x09: "DD: On/Off",
        0x0A: "DD: Tempo",
        0x0B: "CE: On/Off",
        0x0C: "RV: On/Off",
        0x0D: "EXT CTL 1",
        0x0E: "EXT CTL 2",
        0x0F: "EFFECT On/Off",
        0x10: "TUNER On/Off"
    }
};


const ASSIGN_2_8 = [{
    name: "Target",
    byteLength: 1,
    values: ASSIGN_2_8_TARGETS
}, {
    name: "Min",
    byteLength: 1,
    values: HUNDRED
}, {
    name: "Max",
    byteLength: 1,
    values: HUNDRED
}, {
    name: "Source",
    byteLength: 1,
    values: ASSIGN_SOURCE
}, {
    name: "Mode",
    byteLength: 1,
    values: ASSIGN_MODES
}, {
    name: "Act.Range Lo",
    byteLength: 1,
    values: HUNDRED27
}, {
    name: "Act.Range Hi",
    byteLength: 1,
    values: HUNDRED27
}];

const ASSIGN_9_16 = [{
    name: "Target",
    byteLength: 1,
    values: ASSIGN_9_16_TARGETS
}, {
    name: "Source",
    byteLength: 1,
    values: ASSIGN_SOURCE
}, {
    name: "Mode",
    byteLength: 1,
    values: ASSIGN_MODES
}];

const ASSIGN_BASIC_MAP = [];

export {
    ASSIGN_BASIC_MAP,
    ASSIGN_1_MAP
};
