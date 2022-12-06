"use strict";

import {html} from "imports";

import {groupReducer} from "../../functions.js";

import {NAME} from "./constants.js";
import {MESSAGE_TYPE} from "./message_types.js";


const MESSAGE_TYPE_ARRAY = Object.entries(MESSAGE_TYPE);

const messageTypePicker = ({message_id}) => message_id;
const groupByMessageTypeReducer = groupReducer(messageTypePicker);


const view = (props) => {
    const {
        messages = []
    } = props;

    const groupedByMessageType = messages.reduce(groupByMessageTypeReducer, {});
    const messageTypes = [];

    for (const [messageTypeId, typedMessages] of Object.entries(groupedByMessageType)) {
        const [ , {VIEW: MessageTypeView}] = MESSAGE_TYPE_ARRAY.find(([, {ID}], index, arr) => ID == messageTypeId || index === arr.length - 1);
        messageTypes.push(html`<${MessageTypeView} key=${messageTypeId} messages=${typedMessages} />`);
    }

    return html`<div>
        <style>
            .wavetable-wave {
                fill: none;
                opacity: 0.25;
                stroke: black;
                stroke-width: 1;
                vector-effect: non-scaling-stroke;
            }
            .wavetable-wave.selected {
                opacity: 1;
                stroke-width: 2;
            }
        </style>
        <h5>${NAME}</h5>
        ${messageTypes}
    </div>`;
};


export default view;
