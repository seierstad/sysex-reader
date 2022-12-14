"use strict";

import {MANUFACTURER_ID, MANUFACTURER_NAME} from "./constants.js";
import {MODEL} from "./models.js";


const parseWaldorfMessage = (message) => {
    let modelSpecific = {};
    let parser;

    switch (message[0]) {
    case MODEL.BLOFELD.ID:
        parser = MODEL.BLOFELD.PARSER;
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
        ...modelSpecific
    };

};

export default parseWaldorfMessage;
