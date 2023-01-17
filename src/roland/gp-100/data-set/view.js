"use strict";
import {html} from "imports";

import {groupReducer} from "../../../functions.js";

import {NAME} from "./index.js";
import Patch from "./patch-view.js";


const addressBlockPicker = ({address: {data: [MSB, LSB]}}) => `${MSB}-${LSB}`;
const groupByAddressBlockReducer = groupReducer(addressBlockPicker);

const completePatchReducer = (acc, msg, index, arr) => {
    const {
        address: {
            offset = [],
            type = null
        } = {}
    } = msg;

    if (!acc || offset[0] !== index || type !== "patch") {
        return false;
    }

    if (index < arr.length - 1 && msg.message_content_data.length < 128) {
        return false;
    }
    return true;
};

const isCompletePatch = (messages) => {
    return messages.reduce(completePatchReducer, true);
};


function DataSetView (props) {
    const {
        messages = []
    } = props;

    const groupedByAddressBlock = Object.entries(messages.reduce(groupByAddressBlockReducer, {}));
    const messageTypes = [];

    return html`<div>
        <h5>Data Set messages:</h5>
        <span>${groupedByAddressBlock.length} blocks</span>
        ${groupedByAddressBlock.map(([block, group], index) => isCompletePatch(group) ? html`<${Patch} key=${block}-${index} />` : "TODO")}
    </div>`;
}

export default DataSetView;


    /*


    for (const [messageTypeId, typedMessages] of Object.entries(groupedByMessageType)) {
        const [ , {VIEW: MessageTypeView}] = MESSAGE_TYPE_ARRAY.find(([, {ID}], index, arr) => ID == messageTypeId || index === arr.length - 1);
        messageTypes.push(html`<${MessageTypeView} key=${messageTypeId} messages=${typedMessages} />`);
    }
    */
