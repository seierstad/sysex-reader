"use strict";

import {ASSIGN_1_MAP} from "./assign-basic-map.js";

const ASSIGN_2_8_TARGETS = {
    type: TYPE.ENUM,
    values: {
        0x00: "Not Assign",
        0x01: "WAH: On/Off",
        0x02: "WAH: Freq",
        0x03: "WAH: Level",
        0x04: "S/R: On/Off",
        0x05: "S/R: Select",
        0x06: "S/R: Send Level",
        0x07: "PRE: On/Off",
        0x08: "PRE: Mode",
        0x09: "PRE: Type",
        0x0A: "PRE: Volume",
        0x0B: "PRE: Bass",
        0x0C: "PRE: Middle",
        0x0D: "PRE: Treble",
        0x0E: "PRE: Presence",
        0x0F: "PRE: Master",
        0x10: "PRE: Bright",
        0x11: "PRE: Gain",
        0x12: "SPS: On/Off",
        0x13: "SPS: Type",
        0x14: "EQ: On/Off",
        0x15: "EQ: Low EQ",
        0x16: "EQ: Lo-Mid EQ",
        0x17: "EQ: Hi-Mid EQ",
        0x18: "EQ: High EQ",
        0x19: "EQ: Level",
        0x1A: "NS: On/Off",
        0x1B: "HR: On/Off",
        0x1C: "HR1: Pitch",
        0x1D: "HR2: Pitch",
        0x1E: "HR3: Pitch",
        0x1F: "HR4: Pitch",
        0x20: "HR1: Harmony",
        0x21: "HR2: Harmony",
        0x22: "HR3: Harmony",
        0x23: "HR4: Harmony",
        0x24: "HR1: Pan",
        0x25: "HR2: Pan",
        0x26: "HR3: Pan",
        0x27: "HR4: Pan",
        0x28: "HR: Dir Pan",
        0x29: "HR1: Level",
        0x2A: "HR2: Level",
        0x2B: "HR3: Level",
        0x2C: "HR4: Level",
        0x2D: "HR: Dir Level",
        0x2E: "HR: Key",
        0x2F: "FV: Level",
        0x30: "DD: On/Off",
        0x31: "DD: Tempo",
        0x32: "DD: Feedback",
        0x33: "DD: E.Level",
        0x34: "CE: On/Off",
        0x35: "CE: Rate",
        0x36: "CE: Depth",
        0x37: "RV: On/Off",
        0x38: "RV: Rev Time",
        0x39: "RV: D.Level",
        0x3A: "RV: E.Level",
        0x3B: "Master Level",
        0x3C: "Output Channel",
        0x3D: "EXT CTL 1",
        0x3E: "EXT CTL 2",
        0x3F: "EFFECT On/Off",
        0x40: "TUNER On/Off"
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


const ASSIGN_9_16_TARGETS = {
    type: TYPE.ENUM,
    values: {
        0x00: "Not Assign",
        0x01: "WAH: On/Off",
        0x02: "S/R: On/Off",
        0x03: "PRE: On/Off",
        0x04: "SPS: On/Off",
        0x05: "EQ: On/Off",
        0x06: "NS: On/Off",
        0x07: "HR: On/Off",
        0x08: "DD: On/Off",
        0x09: "DD: Tempo",
        0x0A: "CE: On/Off",
        0x0B: "RV: On/Off",
        0x0C: "EXT CTL 1",
        0x0D: "EXT CTL 2",
        0x0E: "EFFECT On/Off",
        0x0F: "TUNER On/Off"
    }
};

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


