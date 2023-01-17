"use strict";
import {render, useState, useEffect, html} from "imports";
import * as serviceWorkerRegistration from "./service-worker-registration.js";

import * as MANUFACTURERS from "./manufacturers.js";
import {groupReducer} from "./functions.js";
import {parser} from "./parser.js";
import HexMessage from "./hex-monitor.js";
import {Midi} from "web-midi";

const MANUF_ARRAY = Object.entries(MANUFACTURERS);

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
};

const handleDragEnter = (event) => {
    event.dataTransfer.dropEffect = "copy";
    event.dataTransfer.effectAllowed = "copy";
    event.preventDefault();
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

    const groups = [];
    for (const [group_manufacturer_id, manufacturer_messages] of Object.entries(grouped)) {
        const [ , {VIEW :ManufacturerView}] = MANUF_ARRAY.find(([, {ID}], index, arr) => ID == group_manufacturer_id || index === arr.length - 1);
        groups.push(html`<${ManufacturerView} messages=${manufacturer_messages} />`);
    }

    return html`
        <div class="file">
            <h3>${name}</h3>
            <span>${size} bytes</span>
            <span>${type}</span>
            <span>${messages.length} messages</span>
            <div>${groups}</div>
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
                    .map((file) => file.arrayBuffer()
                        .then(buffer => ({
                            bytes: buffer,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            messages: parser(buffer)
                        }))
                    )
                );

                updateModel(parsedFiles);
            }
        })();
    }, [files]);

    const handleFileDrop = (event) => {
        setFiles(event.dataTransfer.files);
        event.stopPropagation();
        event.preventDefault();
    };

    const handleMidiAccessButton = (event) => {

    }

    return html`
        <main>
            <h1>Sysex reader</h1>
            <${Midi} />
            <div class="drop-zone" onDrop=${handleFileDrop} onDragenter=${handleDragEnter} onDragover=${handleDragOver}>
                <h2>Drop .syx-files here</h2>
            </div>
            <${HexMessage} message=${[1, 123, 22, 16, 15, 255, 11, 1]} marks=${[[2, 3], [4, 94]]} />
            ${model && model.length > 0 ? model.map(file => html`<${File} file=${file} />`) : null}
        </main>
    `;
}

serviceWorkerRegistration.register();

render(html`<${App} model=${model} />`, document.body);
