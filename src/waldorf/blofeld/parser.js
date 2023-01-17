"use strict";

import {DEVICE_ID_BROADCAST} from "../constants.js";

import {MODEL_ID} from "./index.js";
import {MESSAGE, MESSAGE_ACTION, MESSAGE_SUBJECT, NAME} from "./constants.js";

import parseWavetableDump from "./wavetable-dump/parser.js";
import parseSoundRequest from "./sound-request/parser.js";

import {MESSAGE_TYPE} from "./message-types.js";

const parseDeviceId = (id) => {
    return {
        "device_id": (id === DEVICE_ID_BROADCAST) ? "broadcast" : id
    };
};


const parseMessageID = (byte) => {
    const message_name = [MESSAGE_SUBJECT[byte & 0x0F], MESSAGE_ACTION[byte & 0xF0]].join(" ");
    return {message_name};
};



const parseBlofeldMessage = (message) => {

    let messageContent;
    let parser = null;

    switch (message[1]) {

    case MESSAGE_TYPE.WAVETABLE_DUMP.ID:
        parser = MESSAGE_TYPE.WAVETABLE_DUMP.PARSER;
        break;

    case MESSAGE.SOUND_REQUEST:
        parser = MESSAGE_TYPE.SOUND_REQUEST.PARSER;
        break;

    default:
        messageContent = {"message_support": "unsupported"};
        break;
    }

    if (parser !== null) {
        messageContent = parser(message.subarray(2));
    }

    const result = {
        "model": NAME,
        "model_id": MODEL_ID,
        "message_id": message[1],
        ...parseDeviceId(message[0]),
        ...parseMessageID(message[1]),
        "message_content": messageContent
    };

    return result;
};

export default parseBlofeldMessage;
