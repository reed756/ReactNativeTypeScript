import { r as registerInstance, h, H as Host } from './index-83f2275b.js';

const amplifyContainerCss = "amplify-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100vh}";

const AmplifyContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
AmplifyContainer.style = amplifyContainerCss;

export { AmplifyContainer as amplify_container };
