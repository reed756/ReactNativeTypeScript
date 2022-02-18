import { r as registerInstance, h, H as Host } from './index-83f2275b.js';
var AmplifyAuthContainer = /** @class */ (function () {
    function AmplifyAuthContainer(hostRef) {
        registerInstance(this, hostRef);
    }
    AmplifyAuthContainer.prototype.render = function () {
        return (h(Host, null, h("form", { autoComplete: "on", hidden: true }, h("input", { name: "username" }), h("input", { name: "password", type: "password" }), h("input", { type: "submit" })), h("slot", null)));
    };
    return AmplifyAuthContainer;
}());
export { AmplifyAuthContainer as amplify_auth_container };
