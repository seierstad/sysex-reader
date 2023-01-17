"use strict";
import parseAddress from "../address-parser.js";

const parseRequestDataMessage = (requestDataMessage) => {

    const result = {
        message_name: "request data",
        address: parseAddress(requestDataMessage.subarray(0, 4))
    };

    return result;
};

export default parseRequestDataMessage;
