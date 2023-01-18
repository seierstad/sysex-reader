"use strict";
import {Fragment} from "preact";
import {useState, useEffect} from "preact/hooks";
import {html} from "htm/preact";

function toHex (byte) {
	return byte.toString(16).padStart(2, "0").toUpperCase();
}

function HexMessage (props) {
    const {message = [], marks = []} = props;
    let lastIndex = 0;
    const grouped = marks.reduce((acc, [start, end], index, arr) => {
    	if (!isNaN(start)) {
    		acc = [...acc, ...message.slice(lastIndex, start), [...message.slice(start, end)]];
    	}
    	lastIndex = end;
    	if (index === arr.length - 1) {
    		acc = [...acc, ...message.slice(lastIndex)]
    	}
    	return acc;
    }, []);

    return html`
    	<code>
    		${grouped.map((msgByte, msgIndex, msgArr) => {
    			if (typeof msgByte === "number") {
    				return html`<var key=${msgIndex}>${toHex(msgByte)}</var>${msgIndex === msgArr.length - 1 ? "" : " "}`;
    			}
    			return html`<mark key=${msgIndex}>${msgByte.map((markByte, markIndex, markArr) => html`<var key=${markIndex}>${toHex(markByte)}</var>${markIndex === markArr.length - 1 ? "" : " "}`)}</mark>${msgIndex === msgArr.length - 1 ? "" : " "}`;
    		})}
    	</code>
    `;
}

export default HexMessage;
