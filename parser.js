"use strict";

import {SYSEX_START, SYSEX_END} from "./constants.js";
import {ID_EXTENSION, EXTENSIONS} from "./manufacturer_ids.js";
import * as MANUFACTURER from "./manufacturers.js";


const parseExtensionManufacturerMessage = (message) => {
    //TODO
    if (message === EXTENSIONS) {
        return "blah"; 
    }
    return {"status": "unsupported"};
};

const parseMessage = (message, index) => {
    /*
        parameters:
        message: Uint8Array (starting with SYSEX_START(0x70), ending with SYSEX_END (0x7F))
    */

    if (message[0] !== SYSEX_START || message[message.length - 1] !== SYSEX_END) {
        throw new Error("invalid sysex message: " + message);
    }

    let manufacturerSpecific;
    let parser = null;

    // byte 1 (and sometimes 2 and 3) identifies the manufacturer
    switch (message[1]) {

    case ID_EXTENSION:
        return parseExtensionManufacturerMessage(message);
    case MANUFACTURER.WALDORF.ID:
        parser = MANUFACTURER.WALDORF.PARSER;
        break;
    case MANUFACTURER.ROLAND.ID:
        parser = MANUFACTURER.ROLAND.PARSER;
        break;
    default:
        manufacturerSpecific = {"manufacturer_status": "unsupported"};
        break;
    }

    if (parser !== null) {
        manufacturerSpecific = parser(message.subarray(2, message.length - 1));
    }

    return {
        "message_data": message,
        "message_index": index,
        ...manufacturerSpecific
    };
};

const parser = (buffer) => {
    let index = 0;
    let startIndex = -1;

    let messages = [];

    let arr = new Uint8Array(buffer);

    if (arr[index] !== SYSEX_START) {
        throw new Error("invalid sysex file");
    }

    while (index < arr.length) {
        if (arr[index] === SYSEX_START) {
            startIndex = index;
        } else if (arr[index] === SYSEX_END && startIndex !== -1) {
            messages.push(new Uint8Array(buffer, startIndex, index - startIndex + 1));
        }
        index += 1;
    }

    const parsedMessages = messages.map(parseMessage);

    console.log(`fant ${messages.length} meldinger`);

    return parsedMessages;
};

export {
    parser
};
