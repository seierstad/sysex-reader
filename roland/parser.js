"use strict";
import {MANUFACTURER_ID, MANUFACTURER_NAME} from "./constants.js";
import {MODEL} from "./models.js";


const parseRolandMessage = (message) => {
    let modelSpecific = {};
    let parser = null;

    switch (message[1]) {
    case MODEL.GP100.ID:
        parser = MODEL.GP100.PARSER;
        break;

    default:
        modelSpecific = {"model": "unsupported"};
        break;
    }
    if (parser !== null) {
        modelSpecific = parser(message.subarray(1));
    }

    return {
        "manufacturer": MANUFACTURER_NAME,
        "manufacturer_id": MANUFACTURER_ID,
        "device_id": message[0],
        "model_id": message[1],
        ...modelSpecific
    };

};

export default parseRolandMessage;

