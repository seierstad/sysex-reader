"use strict";
import {HUNDRED} from "./data-types.js";

const FOOT_VOLUME_MAP = [{
    name: "Level",
    byteLength: 1,
    values: HUNDRED
}];

const FOOT_VOLUME_NAMES = {
    name: "Foot Volume",
    short_name: "FV",
    key: "foot_volume"
};

export {
    FOOT_VOLUME_MAP,
    FOOT_VOLUME_NAMES
};
