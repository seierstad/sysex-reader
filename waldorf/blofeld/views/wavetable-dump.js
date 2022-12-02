"use strict";
import {render, Component, useState, useEffect} from "preact";
import {htm} from "htm/preact";

/*
    scale (input) {
        return input * -50;
    }

    @autobind
    pathDataReducer (offset) {

        return (acc, curr, index, arr) => {
            switch (index) {
                case 0:
                    return `M0,${this.scale(0) + offset + 50}v${this.scale(curr)}`;
                case 1:
                    return `${acc}l1,${this.scale(curr - arr[index - 1])}`;
                case (arr.length - 1):
                    return `${acc} 1,${this.scale(curr - arr[index - 1])}v${this.scale(-curr)}`;
                default:
                    return `${acc} 1,${this.scale(curr - arr[index - 1])}`;
            }
        };
    }

    @autobind
    waveElement (wave, index, arr) {
        const offset = arr.length * shift.y;
        return (
            <path
                className={(index === this.props.selected) ? "selected" : null}
                d={wave.reduce(this.pathDataReducer(offset), "")}
                key={`wave-${index}`}
                transform={`translate(${index * shift.x}, ${index * -shift.y})`}
            />
        );
    }

    @autobind
    handleSelect (event) {
        event.stopPropagation();
        this.props.handlers.selectWaveIndex(parseInt(event.target.value), this.props.patch);
    }

    render () {
        const {wavetable = [], selected = 0} = this.props;

        return (
            <div>
                <svg
                    className="wavetable-generator-result"
                    height="100%"
                    viewBox={`0 0 ${wavetable[0].length + Math.ceil(wavetable.length * shift.x)} ${100 + Math.ceil(shift.y * wavetable.length)}`}
                    width="100%"
                >
                    {wavetable.map(this.waveElement)}
                </svg>
                <input max={wavetable.length - 1} min={0} onInput={this.handleSelect} type="range" value={selected} />
            </div>
        );
    }
*/

