"use strict";

const charFirstIndex = 0x10;

const charMap = [
    "≡", // 0x10 
    "±", // 0x11 
    "≥", // 0x12 
    "≤", // 0x13 
    "♩", // 0x14  //uncertain, double check on device
    "♪", // 0x15  //uncertain, double check on device
    "‼", // 0x16  // bad print in the copy, need to check on device
    "≈", // 0x17  // bad print in the copy, need to check on device
    "▫", // 0x18  // bad print in the copy, need to check on device
    "▪", // 0x19  // bad print in the copy, need to check on device
    "Ⅱ", // 0x1A  // bad print in the copy, need to check on device
    "𝐈", // 0x1B  // bad print in the copy, need to check on device
    "♂", // 0x1C  // bad print in the copy, need to check on device
    "♀", // 0x1D  // bad print in the copy, need to check on device
    "↑", // 0x1E 
    "↓", // 0x1F 
    " ", // 0x20 
    "!", // 0x21   //uncertain, double check on device
    "\"",// 0x22 
    "#", // 0x23 
    "$", // 0x24 
    "%", // 0x25 
    "&", // 0x26 
    "'", // 0x27 
    "(", // 0x28 
    ")", // 0x29 
    "*", // 0x2A 
    "+", // 0x2B 
    ",", // 0x2C 
    "-", // 0x2D 
    ".", // 0x2E 
    "/", // 0x2F 
    "0", // 0x30 
    "1", // 0x31 
    "2", // 0x32 
    "3", // 0x33 
    "4", // 0x34 
    "5", // 0x35 
    "6", // 0x36 
    "7", // 0x37 
    "8", // 0x38 
    "9", // 0x39 
    ":", // 0x3A 
    ";", // 0x3B 
    "<", // 0x3C 
    "=", // 0x3D 
    ">", // 0x3E 
    "?", // 0x3F 
    "@", // 0x40 
    "A", // 0x41 
    "B", // 0x42 
    "C", // 0x43 
    "D", // 0x44 
    "E", // 0x45 
    "F", // 0x46 
    "G", // 0x47 
    "H", // 0x48 
    "I", // 0x49 
    "J", // 0x4A 
    "K", // 0x4B 
    "L", // 0x4C 
    "M", // 0x4D 
    "N", // 0x4E 
    "O", // 0x4F 
    "P", // 0x50 
    "Q", // 0x51 
    "R", // 0x52
    "S", // 0x53 
    "T", // 0x54 
    "U", // 0x55 
    "V", // 0x56 
    "W", // 0x57 
    "X", // 0x58 
    "Y", // 0x59 
    "Z", // 0x5A 
    "[", // 0x5B 
    "¥", // 0x5C 
    "]", // 0x5D 
    "^", // 0x5E 
    "_", // 0x5F 
    "`", // 0x60  // bad print in the copy, need to check on device
    "a", // 0x61 
    "b", // 0x62 
    "c", // 0x63 
    "d", // 0x64 
    "e", // 0x65 
    "f", // 0x66 
    "g", // 0x67 
    "h", // 0x68 
    "i", // 0x69 
    "j", // 0x6A 
    "k", // 0x6B 
    "l", // 0x6C 
    "m", // 0x6D 
    "n", // 0x6E 
    "o", // 0x6F 
    "p", // 0x70 
    "q", // 0x71 
    "r", // 0x72 
    "s", // 0x73 
    "t", // 0x74 
    "u", // 0x75 
    "v", // 0x76 
    "w", // 0x77 
    "x", // 0x78 
    "y", // 0x79 
    "z", // 0x7A 
    "{", // 0x7B  // bad print in the copy, need to check on device
    "|", // 0x7C  // bad print in the copy, need to check on device
    "}", // 0x7D  // bad print in the copy, need to check on device
    "→", // 0x7E 
    "←", // 0x7F 
];

const nameParser = (nameBuffer) => {
    return nameBuffer.map(byte => charMap[byte - charFirstIndex]).join("");
};

export default nameParser;
