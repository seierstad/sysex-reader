"use strict";

import {DEVICE_ID_BROADCAST} from "../constants.js";

import {MODEL_ID} from "./index.js";
import {MESSAGE, MESSAGE_TYPE, MESSAGE_SUBJECT, NAME} from "./constants.js";

import parseWavetableDump from "./wavetable_dump/parser.js";

const parseDeviceId = (id) => {
    return {
        "deviceId": (id === DEVICE_ID_BROADCAST) ? "broadcast" : id
    };
};


const parseMessageID = (byte) => {
    const message = [MESSAGE_SUBJECT[byte & 0x0F], MESSAGE_TYPE[byte & 0xF0]].join(" ");
    return {message};
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
        "model": NAME,
        "model_id": MODEL_ID,
        "message_id": message[1],
        ...parseDeviceId(message[0]),
        ...parseMessageID(message[1]),
        ...messageContent
    };

    return result;
};

export default parseBlofeldMessage;
