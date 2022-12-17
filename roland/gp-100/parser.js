"use strict";

import {MODEL_ID} from "./index.js";
import {MESSAGE, NAME} from "./constants.js";

import {MESSAGE_TYPE} from "./message-types.js";


const parseGP100Message = (message) => {

    let messageContent;
    let parser = null;

    switch (message[1]) {

    case MESSAGE_TYPE.DATA_SET.ID:
        parser = MESSAGE_TYPE.DATA_SET.PARSER;
        break;

    case MESSAGE.REQUEST_DATA.ID:
        parser = MESSAGE_TYPE.REQUEST_DATA.PARSER;
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
        ...messageContent
    };

    return result;
};

export default parseGP100Message;
