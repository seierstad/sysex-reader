"use strict";
import {COMPRESSOR_MAP} from "./compressor-limiter-map.js";
import {WAH_PEDAL_MAP} from "./wah-map.js";
import {PREAMP_PATCH_MAP} from "./preamp-map.js";
import {SPEAKER_SIMULATOR_MAP} from "./speaker-simulator-map.js";
import {EQ_MAP} from "./eq-map.js";
import {NOISE_SUPPRESSOR_MAP} from "./noise-suppressor-map.js";
import {FOOT_VOLUME_MAP} from "./foot-volume-map.js";
import {CHORUS_DUAL_MAP} from "./chorus-map.js";
import {DELAY_MINIMAL_MAP} from "./delay-basic-map.js";
import {REVERB_MAP} from "./reverb-map.js";

/*

OFFSETS for DUAL algorithm:
ORDER: 0x0001,
REVERB_CONNECT: 0x001B,
TOGGLE: 0x001C,
CH1 CL: 0x0020,
CH1 WAH: 0x0028,
CH1 PRE: 0x002B,
CH1 SPS: 0x0035,
CH1 EQ:  0x0039,
CH1 NS:  0x003E,
CH1 FV:  0x0040,
CH1 CE:  0x0041,
CH1 DD:  0x0045,
CH1 RV:  0x004B,

CH2 CL:  0x0052,
CH2 PRE: 0x005A,
CH2 SPS: 0x0064,
CH2 EQ:  0x0068,
CH2 NS:  0x006D,
CH2 FV:  0x006F,
CH2 CE:  0x0070,
CH2 DD:  0x0073,
CH2 RV:  0x0079,

MIX:     0x0100,
MASTER:  0x0136,
ASSIGN:  0x013A,
NAME:    0x020A

*/

const CL1 = {
	NAME: "Channel 1: Compressor/Limiter",
	SHORT_NAME: "Ch1:CL",
	ORDER_ID: 0x00,
	OFFSET: 0x0020;
	TOGGLE_MASK: 1 << 30,
	MAP: COMPRESSOR_MAP
};

const WAH1 = {
	NAME: "Channel 1: Wah Pedal",
	SHORT_NAME: "Ch1:WAH",
	ORDER_ID: 0x01,
	OFFSET: 0x0028,
	TOGGLE_MASK: 1 << 29,
	MAP: WAH_PEDAL_MAP
};

const PRE1 = {
	NAME: "Channel 1: Preamp",
	SHORT_NAME: "Ch1:PRE",
	ORDER_ID: 0x02,
	OFFSET: 0x002B,
	TOGGLE_MASK: 1 << 28,
	MAP: PREAMP_PATCH_MAP
};

const SPS1 = {
	NAME: "Channel 1: Speaker Simulator",
	SHORT_NAME: "Ch1:SPS",
	ORDER_ID: 0x03,
	OFFSET: 0x0035,
	TOGGLE_MASK: 1 << 27,
	MAP: SPEAKER_SIMULATOR_MAP
};

const EQ1 = {
	NAME: "Channel 1: Equalizer",
	SHORT_NAME: "Ch1:EQ",
	ORDER_ID: 0x04,
	OFFSET: 0x0039,
	TOGGLE_MASK: 1 < 26,
	MAP: EQ_MAP
};

const NS1 = {
	NAME: "Channel 1: Noise Suppressor",
	SHORT_NAME: "Ch1:NS",
	ORDER_ID: 0x05,
	OFFSET: 0x003E,
	TOGGLE_MASK: 1 << 25,
	MAP: NOISE_SUPPRESSOR_MAP
};

const FV1 = {
	NAME: "Channel 1: Foot Volume",
	SHORT_NAME: "Ch1:FV",
	ORDER_ID: 0x06,
	OFFSET: 0x0040,
	TOGGLE_MASK: 1 << 24,
	MAP: FOOT_VOLUME_MAP
};

const CE1 = {
	NAME: "Channel 1: Chorus",
	SHORT_NAME: "Ch1:CE",
	ORDER_ID: 0x07,
	OFFSET: 0x0041,
	TOGGLE_MASK: 1 << 22,
	MAP: CHORUS_BASIC_MAP
};

const DD1 = {
	NAME: "Channel 1: Delay",
	SHORT_NAME: "Ch1:DD",
	ORDER_ID: 0x08,
	OFFSET: 0x0045,
	TOGGLE_MASK: 1 << 21,
	MAP: DELAY_BASIC_MAP
};

const RV1 = {
	NAME: "Channel 1: Reverb",
	SHORT_NAME: "Ch1:RV",
	ORDER_ID: 0x09,
	OFFSET: 0x004B,
	TOGGLE_MASK: 1 << 20,
	MAP: REVERB_BASIC_MAP
};




const CL2 = {
	NAME: "Channel 2: Compressor/Limiter",
	SHORT_NAME: "Ch2:CL",
	ORDER_ID: 0x0A,
	OFFSET: 0x0052;
	TOGGLE_MASK: 1 << 18,
	MAP: COMPRESSOR_MAP
};

const PRE2 = {
	NAME: "Channel 2: Preamp",
	SHORT_NAME: "Ch2:PRE",
	ORDER_ID: 0x0B,
	OFFSET: 0x005A,
	TOGGLE_MASK: 1 << 17,
	MAP: PREAMP_PATCH_MAP
};

const SPS2 = {
	NAME: "Channel 2: Speaker Simulator",
	SHORT_NAME: "Ch2:SPS",
	ORDER_ID: 0x0C,
	OFFSET: 0x0064,
	TOGGLE_MASK: 1 << 16,
	MAP: SPEAKER_SIMULATOR_MAP
};

const EQ2 = {
	NAME: "Channel 2: Equalizer",
	SHORT_NAME: "Ch2:EQ",
	ORDER_ID: 0x0D,
	OFFSET: 0x0068,
	TOGGLE_MASK: 1 << 14,
	MAP: EQ_MAP
};

const NS2 = {
	NAME: "Channel 2: Noise Suppressor",
	SHORT_NAME: "Ch2:NS",
	ORDER_ID: 0x0E,
	OFFSET: 0x006D,
	TOGGLE_MASK: 1 << 13,
	MAP: NOISE_SUPPRESSOR_MAP
};

const FV2 = {
	NAME: "Channel 2: Foot Volume",
	SHORT_NAME: "Ch2:FV",
	ORDER_ID: 0x0F,
	OFFSET: 0x006F,
	TOGGLE_MASK: 1 << 12,
	MAP: FOOT_VOLUME_MAP
};

const CE2 = {
	NAME: "Channel 2: Chorus",
	SHORT_NAME: "Ch2:CE",
	ORDER_ID: 0x10,
	OFFSET: 0x0070,
	TOGGLE_MASK: 1 << 11,
	MAP: CHORUS_BASIC_MAP
};

const DD2 = {
	NAME: "Channel 2: Delay",
	SHORT_NAME: "Ch2:DD",
	ORDER_ID: 0x11,
	OFFSET: 0x0073,
	TOGGLE_MASK: 1 << 10,
	MAP: DELAY_BASIC_MAP
};

const RV2 = {
	NAME: "Channel 2: Reverb",
	SHORT_NAME: "Ch2:RV",
	ORDER_ID: 0x12,
	OFFSET: 0x0079,
	TOGGLE_MASK: 1 << 9,
	MAP: REVERB_BASIC_MAP
};


const EFFECTS = [
	CL1,
	WAH1,
	PRE1,
	SPS1,
	EQ1,
	NS1,
	FV1,
	CE1,
	DD1,
	RV1,
	CL2,
	PRE2,
	SPS2,
	EQ2,
	NS2,
	FV2,
	CE2,
	DD2,
	RV2
];

