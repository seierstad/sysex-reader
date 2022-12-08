"use strict";

import {html, useState} from "imports";

import {groupReducer} from "../../../functions.js";



const SoundRequestView = (props) => {
    const {
        messages = []
    } = props;

    const groupedByWavetable = messages.reduce(wavetableGroupReducer, {});

    const wavetables = Object.entries(groupedByWavetable)
        .map(([key, messages]) =>
            html`<${Wavetable} key=${key} messages=${messages} />`
        );

    return html`<div>
        <h6>Sound request (${messages.length} messages)</h6>
        ${messages.map(message => {
            const {
                index,
                location: {
                    bank = null,
                    program = null,
                    status = null,
                } = {}
            } = message;

            return html`
                <div class="message sound-request">
                    <dl>
                        ${bank !== null ? html`<dt>bank</dt><dd>${bank}</dd>`: null}
                        ${program !== null ? html`<dt>program</dt><dd>${program}</dd>`: null}
                        ${status !== null ? html`<dt>status</dt><dd>${status}</dd>`: null}
                    </dl>
                </div>
            `;
        })};
    </div>`;
};

export default SoundRequestView;
