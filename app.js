"use strict";
import {render, Component, useState, useEffect, html} from "imports";

import {parser} from "./parser.js";

let model = [];

/*
async function handleFileDrop (event) {

    const files = event.dataTransfer.files;

    event.stopPropagation();
    event.preventDefault();

    const buffer = await files.item(0).arrayBuffer();
    model = parser(buffer);
}
*/

const handleDragOver = (event) => {
    event.preventDefault();
}

const handleDragEnter = (event) => {
    event.dataTransfer.dropEffect = "copy";
    event.dataTransfer.effectAllowed = "copy";
    event.preventDefault();
};

const groupReducer = (keyFunction) => (acc = {}, curr, index) => {
    const key = keyFunction(curr);
    if (!Object.prototype.hasOwnProperty.call(acc, key)) {
        acc[key] = [];
    }
    acc[key].push({index, message: curr});
    return acc;
};

const manufacturerIdPicker = ({manufacturer_id}) => manufacturer_id;

function File (props = {}) {
    const {
        file: {
            name = "",
            size = "unknown size",
            type = "unknown type",
            messages = []
        } = {}
    } = props;


    const groupByManufacturerReducer = groupReducer(manufacturerIdPicker);
    const grouped = messages.reduce(groupByManufacturerReducer, {});

    console.log({grouped});
    return html`
        <div class="file">
            <h3>${name}</h3>
            <span>${size} bytes</span>
            <span>${type}</span>
            <span>${messages.length} messages</span>
        </div>
    `;
}


function App (props) {
    const [model, updateModel] = useState(props.model);
    const [files, setFiles] = useState(null);

    useEffect(() => {
        (async () => {
            if (files !== null) {
                const parsedFiles = await Promise.all([...files]
                    .map((file, index) => file.arrayBuffer()
                        .then(buffer => ({bytes: buffer, name: file.name, size: file.size, type: file.type, messages: parser(buffer)}))));

                updateModel(parsedFiles);
            }
        })();
    }, [files])

    const handleFileDrop = (event) => {
        setFiles(event.dataTransfer.files);
        event.stopPropagation();
        event.preventDefault();
    };

    return html`
        <main>
            <h1>Sysex reader</h1>
            <div class="drop-zone" onDrop=${handleFileDrop} onDragenter=${handleDragEnter} onDragover=${handleDragOver}>
                <h2>Drop .syx-files here</h2>
            </div>
            ${model && model.length > 0 ? model.map(file => html`<${File} file=${file} />`) : null}
        </main>
    `;
}


render(html`<${App} model=${model} />`, document.body);
