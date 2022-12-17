"use strict";
import {TYPE} from "./data-types.js";


const ASSIGN_MODES = {
    type: TYPE.ENUM,
    values: {
        0x00: "Normal",
        0x01: "Toggle"
    }
};

const ASSIGN_SOURCES = {
	type: TYPE.ENUM,
	values: {
	    0x00: "EXP PEDAL",
	    0x01: "CONTROL 1",
	    0x02: "CONTROL 2",
	    0x03: "MIDI Aftertouch",
	    0x04: "MIDI Pitch Bend",
	    0x05: "MIDI CTL# 1",
	    0x06: "MIDI CTL# 2",
	    0x07: "MIDI CTL# 3",
	    0x08: "MIDI CTL# 4",
	    0x09: "MIDI CTL# 5",
	    0x0A: "MIDI CTL# 6",
	    0x0B: "MIDI CTL# 7",
	    0x0C: "MIDI CTL# 8",
	    0x0D: "MIDI CTL# 9",
	    0x0E: "MIDI CTL# 10",
	    0x0F: "MIDI CTL# 11",
	    0x10: "MIDI CTL# 12",
	    0x11: "MIDI CTL# 13",
	    0x12: "MIDI CTL# 14",
	    0x13: "MIDI CTL# 15",
	    0x14: "MIDI CTL# 16",
	    0x15: "MIDI CTL# 17",
	    0x16: "MIDI CTL# 18",
	    0x17: "MIDI CTL# 19",
	    0x18: "MIDI CTL# 20",
	    0x19: "MIDI CTL# 21",
	    0x1A: "MIDI CTL# 22",
	    0x1B: "MIDI CTL# 23",
	    0x1C: "MIDI CTL# 24",
	    0x1D: "MIDI CTL# 25",
	    0x1E: "MIDI CTL# 26",
	    0x1F: "MIDI CTL# 27",
	    0x20: "MIDI CTL# 28",
	    0x21: "MIDI CTL# 29",
	    0x22: "MIDI CTL# 30",
	    0x23: "MIDI CTL# 31",
	    0x24: "MIDI CTL# 64",
	    0x25: "MIDI CTL# 65",
	    0x26: "MIDI CTL# 66",
	    0x27: "MIDI CTL# 67",
	    0x28: "MIDI CTL# 68",
	    0x29: "MIDI CTL# 69",
	    0x2A: "MIDI CTL# 70",
	    0x2B: "MIDI CTL# 71",
	    0x2C: "MIDI CTL# 72",
	    0x2D: "MIDI CTL# 73",
	    0x2E: "MIDI CTL# 74",
	    0x2F: "MIDI CTL# 75",
	    0x30: "MIDI CTL# 76",
	    0x31: "MIDI CTL# 77",
	    0x32: "MIDI CTL# 78",
	    0x33: "MIDI CTL# 79",
	    0x34: "MIDI CTL# 80",
	    0x35: "MIDI CTL# 81",
	    0x36: "MIDI CTL# 82",
	    0x37: "MIDI CTL# 83",
	    0x38: "MIDI CTL# 84",
	    0x39: "MIDI CTL# 85",
	    0x3A: "MIDI CTL# 86",
	    0x3B: "MIDI CTL# 87",
	    0x3C: "MIDI CTL# 88",
	    0x3D: "MIDI CTL# 89",
	    0x3E: "MIDI CTL# 90",
	    0x3F: "MIDI CTL# 91",
	    0x40: "MIDI CTL# 92",
	    0x41: "MIDI CTL# 93",
	    0x42: "MIDI CTL# 94",
	    0x43: "MIDI CTL# 95"
	}
};

export {
	ASSIGN_MODES,
	ASSIGN_SOURCES
};
