import { WidgetOptions } from "./interfaces/";

export class Options {
    /**
     *
     */
    connectButton = true;

    constructor(options: Partial<WidgetOptions> = {}) {
        Object.keys(options).forEach((prop) => {
            this[prop] = options[prop];
        });
    }
}
