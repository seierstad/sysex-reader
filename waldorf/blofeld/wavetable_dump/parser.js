"use strict";

const negMax = (1 << 20);
const posMax = negMax - 1;

const parseWave = (waveBytes) => {
    const signed = new Int32Array(128);
    const float = new Float32Array(128);

    for (let i = 0, offset = 0; i < 128; i += 1, offset += 3) {
        signed[i] = ((waveBytes[offset + 2] | (waveBytes[offset + 1] << 7) | (waveBytes[offset] << 14)) << 11) >> 11;
        float[i] = (signed[i] < 0) ? signed[i] / negMax : signed[i] / posMax;
    }
    return {signed, float};
};

const parseName = (nameBytes) => String.fromCharCode(...nameBytes);

const parseWavetableDump = (wavetableMessage) => {
    const waveStartIndex = 3;
    const waveEndIndex = waveStartIndex + 3 * 128;

    const result = {
        wave: parseWave(wavetableMessage.subarray(waveStartIndex, waveEndIndex), wavetableMessage[1]),
        name: parseName(wavetableMessage.subarray(waveEndIndex, wavetableMessage.length - 3)), //from end of wave data to before checksum and two reserved bytes
        wave_number: wavetableMessage[1],
        slot: wavetableMessage[0],
        format: wavetableMessage[2]
    };

    return result;
};

export default parseWavetableDump;
