"use strict";
const MSB = {
    SYSTEM_PREAMP: 0x00,
    SYSTEM_GLOBAL: 0x01,
    SYSTEM_TUNER: 0x02,
    SYSTEM_MISC: 0x03,
    METER: 0x04,
    BANK_0: 0x05,
    BANK_100: 0x06,
    TEMPORARY_BUFFER1: 0x07,
    BANK_200: 0x08,
    BANK_300: 0x09,
    TEMPORARY_BUFFER2: 0x0A
};

const MISC_2ND_BYTE = {
    FUNCTION: 0x00,
    MIDI: 0x01,
    HARMONY: 0x02,
    FC200: 0x03
};

const banks = [MSB.BANK_0, MSB.BANK_100, MSB.BANK_200, MSB.BANK_300];

const addressParser = (addressBuffer) => {
    const result = {
        "data": addressBuffer.map(b => b),
    };

    const bank = banks.indexOf(addressBuffer[0]);
    if (bank !== -1) {
        if (bank < 2) {
            result.bank = "RAM";
        } else {
            result.bank = "ROM";
        }
        result.type = "patch";
        result.program = bank * 100 + addressBuffer[1] + 1;
        result.offset = [addressBuffer[2], addressBuffer[3]];
        return result;
    }

};

export default addressParser;

/*
todo: human readable addresses
RAM.100.basic.dd.time -> 0x05 0x63 0x
SYSTEM.PREAMP.BULK -> 0x00 0x00 0x00 0x00
*/