"use strict";

const locationStartMessageIndex = 5;
const locationLength = 2;

function parseLocation ([bb, nn]) {
    if (isNaN(bb) || isNaN(nn)) throw new Error(`illegal arguments to parseLocation: nn=${nn}, bb=${bb}`);

    const result = {
        "code": [bb, nn]
    };

    if (bb >= 0 && bb <= 0x19) {
       result.bank = String.fromCharCode("A".charCodeAt() + bb);
       result.program = nn;
       return result;
    }

    if (bb === 0x40) {
        result.bank = "all";
        result.program = "all";
        return result;
    }

    if (bb === 0x7F) {
        if (nn === 0x00) {
            result.program = "Sound mode edit buffer";
            return result;
        }

        result.program = `Multi instrument edit buffer ${nn}`;
        return result;
    }

    result.status = "unsupported";
    return result;
}

const parseSoundRequest = (soundRequestMessage) => {


    const result = {
        location: parseLocation(soundRequestMessage.subarray(locationStartMessageIndex, locationStartMessageIndex + locationLength))
    };

    return result;
};

export default parseSoundRequest;
