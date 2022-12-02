"use strict";
import {render, Component, useState, useEffect, html} from "imports";
import {MODEL} from "./models.js";
import {MANUFACTURER_NAME} from "./constants.js";

function Waldorf (props) {
    const [model, updateModel] = useState(props.model);
    const [files, setFiles] = useState(null);

    const {
    	messages = []
    } = props;

    let ModelView;

    return html`
        <div>
            <h4>${MANUFACTURER_NAME}</h4>
            <${ModelView} />
        </div>
    `;
}

export default Waldorf;