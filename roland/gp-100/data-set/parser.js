"use strict";
import parseAddress from "../address-parser.js";

const parseDataSetMessage = (dataSetMessage) => {

    const result = {
        message_name: "data set",
        address: parseAddress(dataSetMessage.subarray(0, 4))
    };

    return result;
};

export default parseDataSetMessage;
