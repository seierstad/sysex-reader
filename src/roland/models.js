"use strict";
import * as GP100 from "./gp-100/index.js";

const UNKNOWN = {
    NAME: "unknown model",
    PARSER: () => ({"model": "unknown"}),
    VIEW: () => "unknown model"
};

const MODEL = {
    GP100,
    UNKNOWN
};

export {
    MODEL
};
