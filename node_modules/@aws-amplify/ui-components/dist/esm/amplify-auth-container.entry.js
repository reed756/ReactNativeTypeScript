import { r as registerInstance, h, H as Host } from './index-83f2275b.js';

const AmplifyAuthContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("form", { autoComplete: "on", hidden: true }, h("input", { name: "username" }), h("input", { name: "password", type: "password" }), h("input", { type: "submit" })), h("slot", null)));
    }
};

export { AmplifyAuthContainer as amplify_auth_container };
