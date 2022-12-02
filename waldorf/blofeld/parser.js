"use strict";

import {DEVICE_ID_BROADCAST} from "../constants.js";
import {MODEL_ID} from "./index.js";

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


const parseDeviceId = (id) => {
    return {
        "deviceId": (id === DEVICE_ID_BROADCAST) ? "broadcast" : id
    };
};


const parseMessageID = (byte) => {
    const message = [MESSAGE_SUBJECT[byte & 0x0F], MESSAGE_TYPE[byte & 0xF0]].join(" ");
    return {message};
};

const mask7bits = 0x7F;
const negMax = (1 << 20);
const posMax = negMax - 1;

const parseWave = (waveBytes, idx) => {
    const result = new Float32Array(128);
    const signFix = new Int32Array(1);
    const unsignFix = new Uint32Array(signFix.buffer);

    for (let i = 0, offset = 0; i < 128; i += 1, offset += 3) {
        signFix[0] = ((waveBytes[offset + 2] | (waveBytes[offset + 1] << 7) | (waveBytes[offset] << 14)) << 11) >> 11;
        const fixed = signFix[0];

        result[i] = (fixed < 0) ? fixed / negMax : fixed / posMax;
    }
    return result;
};

const parseName = (nameBytes) => String.fromCharCode(...nameBytes);

const parseWavetableDump = (wavetableMessage) => {
    const waveStartIndex = 3;
    const waveEndIndex = waveStartIndex + 3 * 128;

    const result = {
        wave: parseWave(wavetableMessage.subarray(waveStartIndex, waveEndIndex), wavetableMessage[1]),
        name: parseName(wavetableMessage.subarray(waveEndIndex, wavetableMessage.length - 3)), //from end of wave data to before checksum and two reserved bytes
        wave_number: wavetableMessage[1],
        slot: wavetableMessage[0],
        format: wavetableMessage[2]
    };

    return result;
};

const parseBlofeldMessage = (message) => {

    let messageContent;

    switch (message[1]) {
        case MESSAGE.WAVETABLE_DUMP:
            messageContent = parseWavetableDump(message.subarray(2));
            break;

        default:
            messageContent = {"message_support": "unsupported"};
            break;
    }

    const result = {
        "model": "Blofeld",
        "model_id": MODEL_ID,
        ...parseDeviceId(message[0]),
        ...parseMessageID(message[1]),
        ...messageContent
    };

    return result;
};

export default parseBlofeldMessage;
