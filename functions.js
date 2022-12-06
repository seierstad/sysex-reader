"use strict";

const groupReducer = (keyFunction) => (acc = {}, message) => {
    const key = keyFunction(message);
    if (!Object.prototype.hasOwnProperty.call(acc, key)) {
        acc[key] = [];
    }
    acc[key].push(message);
    return acc;
};

export {
    groupReducer
};
