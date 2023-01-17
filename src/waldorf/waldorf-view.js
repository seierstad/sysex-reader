"use strict";

import {html} from "imports";

import {groupReducer} from "../functions.js";

import {MODEL} from "./models.js";
import {MANUFACTURER_NAME} from "./constants.js";

const MODEL_ARRAY = Object.entries(MODEL);

const modelIdPicker = ({model_id}) => model_id;
const groupByModelReducer = groupReducer(modelIdPicker);

function Waldorf (props) {

    const {
        messages = []
    } = props;

    const groupedByModel = messages.reduce(groupByModelReducer, {});

    const models = [];
    for (const [group_model_id, model_messages] of Object.entries(groupedByModel)) {
        const [ , {VIEW :ModelView}] = MODEL_ARRAY.find(([, {ID}], index, arr) => ID == group_model_id || index === arr.length - 1);
        models.push(html`<${ModelView} key=${group_model_id} messages=${model_messages} />`);
    }

    return html`
        <div class="manufacturer waldorf">
            <h4>${MANUFACTURER_NAME}</h4>
            <div>${models}</div>
        </div>
    `;
}

export default Waldorf;
