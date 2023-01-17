"use strict";
import {html} from "imports";

import {groupReducer} from "../../functions.js";

import {NAME} from "./constants.js";
import {MESSAGE_TYPE} from "./message-types.js";


const MESSAGE_TYPE_ARRAY = Object.entries(MESSAGE_TYPE);

const messageTypePicker = ({message_id}) => message_id;
const groupByMessageTypeReducer = groupReducer(messageTypePicker);


const gp100View = (props) => {
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
        <h5>${NAME}</h5>
        <span>${messages.length} messages</span>
        ${messageTypes}
    </div>`;
};


export default gp100View;
