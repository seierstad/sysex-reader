"use strict";
const MODEL_ID = 0x13;
const NAME = "Blofeld";

const MESSAGE = {
    SOUND_REQUEST: 0x00,
    WAVETABLE_REQUEST: 0x02,
    GLOBAL_REQUEST: 0x04,
    SOUND_DUMP: 0x10,
    WAVETABLE_DUMP: 0x12,
    GLOBAL_DUMP: 0x14,
    SOUND_PARAMETER_CHANGE: 0x20,
    WAVETABLE_PARAMETER_CHANGE: 0x22,
    GLOBAL_PARAMETER_CHANGE: 0x24
};

const MESSAGE_TYPE = {
    0x00: "request",
    0x10: "dump",
    0x20: "parameter change"
};

const MESSAGE_SUBJECT = {
    0x00: "sound",
    0x02: "wavetable",
    0x04: "global"
};

export {
    MODEL_ID,
    MESSAGE,
    MESSAGE_TYPE,
    MESSAGE_SUBJECT,
    NAME
};
