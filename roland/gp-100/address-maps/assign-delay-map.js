"use strict";
import {ASSIGN_1_MAP} from "./assign-basic-map.js";

const ASSIGN_2_8_TARGETS = {
    type: TYPE.ENUM,
    values: {
        0x00: "Not Assign",
        0x01: "CL: On/Off",
        0x02: "CL: LM Level",
        0x03: "CL: CS Level",
        0x04: "WAH: On/Off",
        0x05: "WAH: Freq",
        0x06: "WAH: Level",
        0x07: "S/R: On/Off",
        0x08: "S/R: Select",
        0x09: "S/R: Send Level",
        0x0A: "PRE: On/Off",
        0x0B: "PRE: Mode",
        0x0C: "PRE: Type",
        0x0D: "PRE: Volume",
        0x0E: "PRE: Bass",
        0x0F: "PRE: Middle",
        0x10: "PRE: Treble",
        0x11: "PRE: Presence",
        0x12: "PRE: Master",
        0x13: "PRE: Bright",
        0x14: "PRE: Gain",
        0x15: "SPS: On/Off",
        0x16: "SPS: Type",
        0x17: "EQ: On/Off",
        0x18: "EQ: Low EQ",
        0x19: "EQ: Lo-Mid EQ",
        0x1A: "EQ: Hi-Mid EQ",
        0x1B: "EQ: High EQ",
        0x1C: "EQ: Level",
        0x1D: "NS: On/Off",
        0x1E: "PH: On/Off",
        0x1F: "PH: Rate",
        0x20: "PH: Depth",
        0x21: "PH: Manual",
        0x22: "PH: Resonance",
        0x23: "FL: On/Off",
        0x24: "FL: Rate",
        0x25: "FL: Depth",
        0x26: "FL: Manual",
        0x27: "FL: Resonance",
        0x28: "HR: On/Off",
        0x29: "HR: Pitch",
        0x2A: "HR: Harmony",
        0x2B: "HR: Key",
        0x2C: "HR: D.Level",
        0x2D: "HR: E.Level",
        0x2E: "FV: Level",
        0x2F: "DD: On/Off",
        0x30: "DD: Tempo",
        0x31: "DD: Feedback",
        0x32: "DD: DLY1 Level",
        0x33: "DD: DLY2 Level",
        0x34: "DD: DLY3 Level",
        0x35: "DD: DLY4 Level",
        0x36: "DD: Dir Level",
        0x37: "DD: DLY1 Pan",
        0x38: "DD: DLY2 Pan",
        0x39: "DD: DLY3 Pan",
        0x3A: "DD: DLY4 Pan",
        0x3B: "DD: Dir Pan",
        0x3C: "DD: Ducking",
        0x3D: "CE: On/Off",
        0x3E: "CE: Rate",
        0x3F: "CE: Depth",
        0x40: "CE: E.Level",
        0x41: "RV: On/Off",
        0x42: "RV: Rev Time",
        0x43: "RV: D.Level",
        0x44: "RV: E.Level",
        0x45: "Master Level",
        0x46: "Output Channel",
        0x47: "EXT CTL 1",
        0x48: "EXT CTL 2",
        0x49: "EFFECT On/Off",
        0x4A: "TUNER On/Off"
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
        0x01: "CL: On/Off",
        0x02: "WAH: On/Off",
        0x03: "S/R: On/Off",
        0x04: "PRE: On/Off",
        0x05: "SPS: On/Off",
        0x06: "EQ: On/Off",
        0x07: "NS: On/Off",
        0x08: "PH: On/Off",
        0x09: "FL: On/Off",
        0x0A: "HR: On/Off",
        0x0B: "DD: On/Off",
        0x0C: "DD: Tempo",
        0x0D: "DD: Ducking",
        0x0E: "CE: On/Off",
        0x0F: "RV: On/Off",
        0x10: "EXT CTL 1",
        0x11: "EXT CTL 2",
        0x12: "EFFECT On/Off",
        0x13: "TUNER On/Off"
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


