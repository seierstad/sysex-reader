"use strict";
import * as BLOFELD from "./blofeld/index.js";

const UNKNOWN = {
    NAME: "unknown model",
    PARSER: () => ({"model": "unknown"}),
    VIEW: () => "unknown model"
};

const MODEL = {
    BLOFELD,
    UNKNOWN
};

export {
    MODEL
};
