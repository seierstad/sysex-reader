"use strict";

const ASSIGN_1_TARGETS = {
	type: TYPE.ENUM,
	values: {
		0x00: "Not Assign",
		0x01: "Ch1 WAH: Freq",
		0x02: "Ch1 FV: Level",
		0x03: "Ch2 FV: Level",
		0x04: "Master Level"
	}
};

const ASSIGN_2_8_TARGETS = {
    type: TYPE.ENUM,
    values: {
        0x00: "Not Assign",
        0x01: "Ch1 CL: On/Off",
        0x02: "Ch1 CL: LM Lev",
        0x03: "Ch1 CL: CS Lev",
        0x04: "Ch1 WAH:On/Off",
        0x05: "Ch1 WAH:Freq",
        0x06: "Ch1 WAH:Level",
        0x07: "Ch1 PRE:On/Off",
        0x08: "Ch1 PRE:Mode",
        0x09: "Ch1 PRE:Type",
        0x0A: "Ch1 PRE:Volume",
        0x0B: "Ch1 PRE:Bass",
        0x0C: "Ch1 PRE:Middle",
        0x0D: "Ch1 PRE:Treble",
        0x0E: "Ch1 PRE:Presence",
        0x0F: "Ch1 PRE:Master",
        0x10: "Ch1 PRE:Bright",
        0x11: "Ch1 PRE:Gain",
        0x12: "Ch1 SPS:On/Off",
        0x13: "Ch1 SPS:Type",
        0x14: "Ch1 EQ:On/Off",
        0x15: "Ch1 EQ:Low EQ",
        0x16: "Ch1 EQ:Mid EQ",
        0x17: "Ch1 EQ:High EQ",
        0x18: "Ch1 EQ:Level",
        0x19: "Ch1 NS:On/Off",
        0x1A: "Ch1 FV:Level",
        0x1B: "Ch1 CE:On/Off",
        0x1C: "Ch1 CE:Rate",
        0x1D: "Ch1 CE:Depth",
        0x1E: "Ch1 CE:E.Level",
        0x1F: "Ch1 DD:On/Off",
        0x20: "Ch1 DD:Feedback",
        0x21: "Ch1 DD:E.Level",
        0x22: "Ch1 RV:On/Off",
        0x23: "Ch1 RV:RevTime",
        0x24: "Ch1 RV:D.Level",
        0x25: "Ch1 RV:E.Level",
        0x26: "Ch2 CL: On/Off",
        0x27: "Ch2 CL: LM Lev",
        0x28: "Ch2 CL: CS Lev",
        0x29: "Ch2 PRE:On/Off",
        0x2A: "Ch2 PRE:Mode",
        0x2B: "Ch2 PRE:Type",
        0x2C: "Ch2 PRE:Volume",
        0x2D: "Ch2 PRE:Bass",
        0x2E: "Ch2 PRE:Middle",
        0x2F: "Ch2 PRE:Treble",
        0x30: "Ch2 PRE:Presence",
        0x31: "Ch2 PRE:Master",
        0x32: "Ch2 PRE:Bright",
        0x33: "Ch2 PRE:Gain",
        0x34: "Ch2 SPS:On/Off",
        0x35: "Ch2 SPS:Type",
        0x36: "Ch2 EQ:On/Off",
        0x37: "Ch2 EQ:Low EQ",
        0x38: "Ch2 EQ:Mid EQ",
        0x39: "Ch2 EQ:High EQ",
        0x3A: "Ch2 EQ:Level",
        0x3B: "Ch2 NS:On/Off",
        0x3C: "Ch2 FV:Level",
        0x3D: "Ch2 CE:On/Off",
        0x3E: "Ch2 CE:Rate",
        0x3F: "Ch2 CE:Depth",
        0x40: "Ch2 CE:E.Level",
        0x41: "Ch2 DD:On/Off",
        0x42: "Ch2 DD:Feedback",
        0x43: "Ch2 DD:E.Level",
        0x44: "Ch2 RV:On/Off",
        0x45: "Ch2 RV:RevTime",
        0x46: "Ch2 RV:D.Level",
        0x47: "Ch2 RV:E.Level",
        0x48: "MIX: Ch1 Level",
        0x49: "MIX: Ch2 Level",
        0x4A: "DD: Tempo",
        0x4B: "Master Level",
        0x4C: "Output Channel",
        0x4D: "EXT CTL 1",
        0x4E: "EXT CTL 2",
        0x4F: "EFFECT On/Off",
        0x50: "TUNER On/Off"
    }
};

const ASSIGN_9_16_TARGETS = {
    type: TYPE.ENUM,
    values: {
        0x00: "Not Assign",
        0x01: "Ch1 CL: On/Off",
        0x02: "Ch1 WAH:On/Off",
        0x03: "Ch1 PRE:On/Off",
        0x04: "Ch1 SPS:On/Off",
        0x05: "Ch1 EQ: On/Off",
        0x06: "Ch1 NS: On/Off",
        0x07: "Ch1 CE: On/Off",
        0x08: "Ch1 DD: On/Off",
        0x09: "Ch1 RV: On/Off",
        0x0A: "Ch2 CL: On/Off",
        0x0B: "Ch2 PRE:On/Off",
        0x0C: "Ch2 SPS:On/Off",
        0x0D: "Ch2 EQ: On/Off",
        0x0E: "Ch2 NS: On/Off",
        0x0F: "Ch2 CE: On/Off",
        0x10: "Ch2 DD: On/Off",
        0x11: "Ch2 RV: On/Off",
        0x12: "DD: Tempo",
        0x13: "EXT CTL 1",
        0x14: "EXT CTL 2",
        0x15: "EFFECT On/Off",
        0x16: "TUNER On/Off"
    }
};

