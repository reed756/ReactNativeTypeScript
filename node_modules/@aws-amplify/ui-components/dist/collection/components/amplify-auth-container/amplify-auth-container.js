import { Component, h, Host } from '@stencil/core';
/**
 * @slot (default) - Content placed within the container
 */
export class AmplifyAuthContainer {
    render() {
        return (h(Host, null,
            h("form", { autoComplete: "on", hidden: true },
                h("input", { name: "username" }),
                h("input", { name: "password", type: "password" }),
                h("input", { type: "submit" })),
            h("slot", null)));
    }
    static get is() { return "amplify-auth-container"; }
}
