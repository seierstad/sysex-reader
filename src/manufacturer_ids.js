"use strict";
const ID_EXTENSION = 0x00;
const MANUFACTURER = {
    "SEQUENTIAL": 0x01,
    "MOOG":       0x04,
    "ENSONIQ":    0x0F,
    "EVENTIDE":   0x1C,
    "PPG":        0x29,
    "WALDORF":    0x3E,
    "ROLAND":     0x41,
    "KORG":       0x42,
    "YAMAHA":     0x43,
    "CASIO":      0x44,
    "AKAI":       0x47
};

const EXTENSION_0x00 = {
    "ALESIS": 0x0E,
    "APHEX":  0x38
};

const EXTENSION_0x01 = {
    "ANTARES": 0x26
};

const EXTENSION_0x02 = {
    "UNIVERSAL_AUDIO": 0x18,
    "BUCHLA": 0x37
};

const EXTENSION_0x20 = {
    "TC_ELECTRONICS": 0x1F,
    "FOCUSRITE_NOVATION": 0x29,
    "WAVES_AUDIO": 0x66,
    "ARTURIA": 0x6B
};

const EXTENSION_0x21 = {
    "PRESONUS": 0x03,
    "NATIVE_INSTRUMENTS": 0x09,
    "ROLI": 0x10,
    "ABLETON": 0x1D
};

const EXTENSION_0x40 = {
    "CRIMSON": 0x00
};

const EXTENSIONS = {
    0x00: EXTENSION_0x00,
    0x01: EXTENSION_0x01,
    0x02: EXTENSION_0x02,
    0x20: EXTENSION_0x20,
    0x21: EXTENSION_0x21,
    0x40: EXTENSION_0x40
};

export {
    ID_EXTENSION,
    MANUFACTURER,
    EXTENSIONS
};
