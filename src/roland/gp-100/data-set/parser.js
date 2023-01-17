"use strict";
import rolandChecksum from "../../checksum.js";
import parseAddress from "../address-parser.js";
import {NAME as message_name} from "./index.js";
import {parsePatch} from "./patch-parser.js";


const parseDataSetMessage = (dataSetMessage) => {

    const address = parseAddress(dataSetMessage.subarray(0, 4));
    const message_content_data = dataSetMessage.subarray(4, -1);
    const checksum = dataSetMessage[dataSetMessage.length - 1];

    const result = {
        message_name,
        address,
        message_content_data,
        checksum,
        checksum_ok: rolandChecksum([...address.data, ...message_content_data]) === checksum
    };
    if (address.type === "patch") {
        result.patch = parsePatch(message_content_data, address.offset);
    }

    return result;
};

export default parseDataSetMessage;
