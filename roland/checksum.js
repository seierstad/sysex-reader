"use strict";

const rolandChecksum = (data) => {
    const sum = (Array.from(data).reduce((a, c) => a + c) & 0x7F);
    return sum === 0 ? sum : 0x80 - sum;
};

export default rolandChecksum;
