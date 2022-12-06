"use strict";
import {MANUFACTURER_ID, MANUFACTURER_NAME} from "./constants.js";

const parseRolandMessage = (message) => {

    return ({
        "manufacturer": MANUFACTURER_NAME,
        "manufacturer_id": MANUFACTURER_ID,
        "model_id": message[3],
        "status": "TODO!!!"
    });
};

export default parseRolandMessage;