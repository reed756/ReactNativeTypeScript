'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');

const AmplifyAuthContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("form", { autoComplete: "on", hidden: true }, index.h("input", { name: "username" }), index.h("input", { name: "password", type: "password" }), index.h("input", { type: "submit" })), index.h("slot", null)));
    }
};

exports.amplify_auth_container = AmplifyAuthContainer;
